/*
 * LGPL-3-0
 *
 * Copyright (C) 2021 klikli-dev
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

package com.klikli_dev.modonomicon.network.messages;

import com.klikli_dev.modonomicon.data.BookDataManager;
import com.klikli_dev.modonomicon.data.book.Book;
import com.klikli_dev.modonomicon.data.book.BookCategory;
import com.klikli_dev.modonomicon.data.book.BookEntry;
import com.klikli_dev.modonomicon.network.Message;
import net.minecraft.client.Minecraft;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.fmllegacy.network.NetworkEvent.Context;

import java.util.HashMap;
import java.util.Map;

public class SyncBookDataMessage implements Message {

    public Map<ResourceLocation, Book> books = new HashMap<>();

    public SyncBookDataMessage(Map<ResourceLocation, Book> books) {
        this.books = books;
    }

    public SyncBookDataMessage(FriendlyByteBuf buf) {
        this.decode(buf);
    }

    @Override
    public void encode(FriendlyByteBuf buf) {
        buf.writeInt(this.books.size());
        for (var book : this.books.values()) {
            buf.writeResourceLocation(book.getId());
            book.toNetwork(buf);

            buf.writeInt(book.getCategories().size());
            for(var category : book.getCategories().values()) {
                buf.writeResourceLocation(category.getId());
                category.toNetwork(buf);

                buf.writeInt(book.getEntries().size());
                for(var entry : category.getEntries().values()) {
                    buf.writeResourceLocation(entry.getId());
                    entry.toNetwork(buf);
                }
            }
        }
    }

    @Override
    public void decode(FriendlyByteBuf buf) {
        //build books
        int bookCount = buf.readInt();
        for (int i = 0; i < bookCount; i++) {
            ResourceLocation bookId = buf.readResourceLocation();
            Book book = Book.fromNetwork(bookId, buf);
            this.books.put(bookId, book);

            int categoryCount = buf.readInt();
            for (int j = 0; j< categoryCount; j++) {
                ResourceLocation categoryId = buf.readResourceLocation();
                BookCategory category = BookCategory.fromNetwork(categoryId, buf);

                //link category and book
                book.addCategory(category);
                category.setBook(book);

                int entryCount = buf.readInt();
                for (int k = 0; k < entryCount; k++) {
                    ResourceLocation entryId = buf.readResourceLocation();
                    BookEntry bookEntry = BookEntry.fromNetwork(entryId, buf);

                    //link entry and category
                    bookEntry.setCategory(category);
                    category.addEntry(bookEntry);
                }
            }
        }

        //resolve entry parents
        BookDataManager.resolveBookEntryParents(this.books.values());
    }


    @Override
    public void onClientReceived(Minecraft minecraft, Player player, Context context) {
        BookDataManager.get().onDatapackSyncPacket(this);
    }
}
