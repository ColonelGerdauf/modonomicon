/*
 * SPDX-FileCopyrightText: 2022 klikli-dev
 *
 * SPDX-License-Identifier: MIT
 */

package com.klikli_dev.modonomicon.client.gui.book.button;

import com.klikli_dev.modonomicon.client.gui.book.BookOverviewScreen;
import com.mojang.blaze3d.systems.RenderSystem;
import com.mojang.blaze3d.vertex.PoseStack;
import net.minecraft.client.gui.GuiComponent;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.renderer.GameRenderer;
import net.minecraft.network.chat.TextComponent;

public class SearchButton extends Button {

    private final BookOverviewScreen parent;
    private final int scissorX;

    public SearchButton(BookOverviewScreen parent, int pX, int pY, int scissorX, int width, int height, OnPress pOnPress, OnTooltip pOnTooltip) {
        super(pX, pY, width, height, new TextComponent(""), pOnPress, pOnTooltip);
        this.scissorX = scissorX;
        this.parent = parent;
    }

    @Override
    public void renderButton(PoseStack pMatrixStack, int pMouseX, int pMouseY, float pPartialTicks) {
        if (this.visible) {
            RenderSystem.setShaderColor(1.0F, 1.0F, 1.0F, 1.0F);
            RenderSystem.setShader(GameRenderer::getPositionTexShader);

            int texX = 15;
            int texY = 165;

            int renderX = this.x;
            int scissorWidth = this.width + (this.x - this.scissorX);
            int scissorY = (this.parent.height - this.y - this.height - 1); //from the bottom up

            if (this.isHoveredOrFocused()) {
                renderX += 1;
                scissorWidth -= 1;
            }

            int scale = (int) this.parent.getMinecraft().getWindow().getGuiScale();

            //GL scissors allows us to move the button on hover without intersecting with book border
            //scissors always needs to use gui scale because it runs in absolute coords!
            //see also vanilla class SocialInteractionsPlayerList using scissors in #render
            RenderSystem.enableScissor(this.scissorX, this.y - 10, scissorWidth, this.height + 20);
            RenderSystem.enableScissor(this.scissorX * scale, scissorY * scale, scissorWidth * scale, 1000);

            RenderSystem.setShaderTexture(0, this.parent.getBookOverviewTexture());
            GuiComponent.blit(pMatrixStack, renderX, this.y, this.parent.getBlitOffset() + 50, texX, texY, this.width, this.height, 256, 256);

            RenderSystem.disableScissor();


            //draw search button
        }

        if (this.isHoveredOrFocused()) {
            this.renderToolTip(pMatrixStack, pMouseX, pMouseY);
        }
    }
}
