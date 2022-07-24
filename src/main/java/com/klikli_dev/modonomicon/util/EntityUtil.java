/*
 * SPDX-FileCopyrightText: 2022 klikli-dev
 *
 * SPDX-License-Identifier: MIT
 */

package com.klikli_dev.modonomicon.util;

import com.klikli_dev.modonomicon.Modonomicon;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import net.minecraft.core.Registry;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.TagParser;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.level.Level;
import org.apache.commons.lang3.tuple.Pair;

import java.util.Optional;
import java.util.function.Function;

public class EntityUtil {

    private static Pair<String, String> splitNameAndNBT(String entityId) {
        int nbtStart = entityId.indexOf("{");
        String nbtStr = "";
        if (nbtStart > 0) {
            nbtStr = entityId.substring(nbtStart).replaceAll("([^\\\\])'", "$1\"").replaceAll("\\\\'", "'");
            entityId = entityId.substring(0, nbtStart);
        }

        return Pair.of(entityId, nbtStr);
    }

    public static String getEntityName(ResourceLocation entityId) {
        Pair<String, String> nameAndNbt = splitNameAndNBT(entityId.toString());
        EntityType<?> type = Registry.ENTITY_TYPE.get(new ResourceLocation(nameAndNbt.getLeft()));

        return type.getDescriptionId();
    }

    public static Function<Level, Entity> getEntityLoader(String entityId) {
        Pair<String, String> nameAndNbt = splitNameAndNBT(entityId);
        entityId = nameAndNbt.getLeft();
        String nbtStr = nameAndNbt.getRight();
        CompoundTag nbt = null;

        if (!nbtStr.isEmpty()) {
            try {
                nbt = TagParser.parseTag(nbtStr);
            } catch (CommandSyntaxException e) {
                Modonomicon.LOGGER.error("Failed to load entity data", e);
            }
        }

        ResourceLocation key = new ResourceLocation(entityId);
        Optional<EntityType<?>> maybeType = Registry.ENTITY_TYPE.getOptional(key);
        if (maybeType.isEmpty()) {
            throw new RuntimeException("Unknown entity id: " + entityId);
        }
        EntityType<?> type = maybeType.get();
        final CompoundTag useNbt = nbt;
        final String useId = entityId;
        return (world) -> {
            Entity entity;
            try {
                entity = type.create(world);
                if (useNbt != null) {
                    entity.load(useNbt);
                }

                return entity;
            } catch (Exception e) {
                throw new IllegalArgumentException("Can't load entity " + useId, e);
            }
        };
    }
}
