---
sidebar_position: 30
---


# Step 3: Creating the Book

Now it is time to add code to generate our book, a first category and an entry with a page.
We will focus on the structure and layout of the book in this step, and add the texts in the next step.

If you are impatient you can skip ahead to **[Results](#results)** to see what we will be creating.

## Preparations: Java Imports

1. Open `DemoBookProvider.java` in your IDE or text editor.
2. Below `package ...` but above `public class ...` add the following lines:
    ```java 
    import com.klikli_dev.modonomicon.api.ModonomiconAPI;
    import com.klikli_dev.modonomicon.api.datagen.BookLangHelper;
    import com.klikli_dev.modonomicon.api.datagen.BookProvider;
    import com.klikli_dev.modonomicon.api.datagen.EntryLocationHelper;
    import com.klikli_dev.modonomicon.api.datagen.book.BookCategoryModel;
    import com.klikli_dev.modonomicon.api.datagen.book.BookEntryModel;
    import com.klikli_dev.modonomicon.api.datagen.book.BookModel;
    import com.klikli_dev.modonomicon.api.datagen.book.page.BookMultiblockPageModel;
    import com.klikli_dev.modonomicon.api.datagen.book.page.BookTextPageModel;
    import net.minecraft.data.DataGenerator;
    import net.minecraft.resources.ResourceLocation;
    import net.minecraftforge.common.data.LanguageProvider;
    ```


:::tip 

If you are using an IDE it might do this step for you.

::: 

## Our first Book

1. Open `DemoBookProvider.java` in your IDE or text editor.
2. In the `generate` method, add the following code:
    ```java
     //call our code that generates a book with the id "demo"
    var demoBook = this.makeDemoBook("demo");

    //then add the book to the list of books to generate    
    this.add(demoBook);
    ```

    This will create a new book with the id "demo" (the code for that follows in the next step) and add it to the list of books to be generated.

3. Now we add the method we're calling above to the bottom of the file, before the last `}`:
    ```java
    private BookModel makeDemoBook(String bookName) {
        //The lang helper keeps track of the "DescriptionIds", that is, the language keys for translations, for us
        var helper = ModonomiconAPI.get().getLangHelper(this.modid);

        //we tell the helper the book we're in.
        helper.book(bookName);

        //Now we create the book with settings of our choosing
        var demoBook = BookModel.builder()
                .withId(this.modLoc(bookName)) //the id of the book. modLoc() prepends the mod id.
                .withName(helper.bookName()) //the name of the book. The lang helper gives us the correct translation key.
                .withTooltip(helper.bookTooltip()) //the hover tooltip for the book. Again we get a translation key.
                .withGenerateBookItem(true) //auto-generate a book item for us.
                .withModel(new ResourceLocation("modonomicon:modonomicon_red")) //use the default red modonomicon icon for the book
                .withCreativeTab("modonomicon") //and put it in the modonomicon tab
                .build();
        return demoBook;
    }
    ```

Congratulations! This will generate a book for us. Let's test how that works!

1. In the terminal, run `./gradlew runData` to generate the json file(s).
2. After it is complete, run `./gradlew runClient` to start Minecraft.
3. Create or join a world with cheats enabled.
4. Switch to creative mode with `/gamemode creative`.
5. Open the inventory and look for the "Modonomicon" creative tab or the search tab.
6. There will be two purple books - the builtin modonomicon demos - and one red book, the one we just generated.
7. Take it into your hotbar and take a look at it
   1. You will notice a weird text for the name and tooltip: `book.modonomicon_demo_book.demo.name` and `book.modonomicon_demo_book.demo.tooltip` This is because we haven't added any translations yet.
8. Right click with the book in hand.
9. Crash! That's ok - if we do not add any categories the book does not know what to display. Let's fix that!

## Our first Category

1. Open `DemoBookProvider.java`
2. Add the following code to the bottom of the file, before the last `}`:
    ```java
    private BookCategoryModel makeFeaturesCategory(BookLangHelper helper) {
        helper.category("features"); //tell our lang helper the category we are in

        //the entry helper is the second helper for book datagen
        //it allows us to place entries in the category without manually defining the coordinates.
        //each letter can be used to represent an entry
        var entryHelper = ModonomiconAPI.get().getEntryLocationHelper();
        entryHelper.setMap(
                "_____________________",
                "__m______________d___",
                "__________r__________",
                "__c__________________",
                "__________2___3___i__",
                "__s_____e____________"
        );

        return BookCategoryModel.builder()
                .withId(this.modLoc(helper.category)) //the id of the category, as stored in the lang helper. modLoc() prepends the mod id.
                .withName(helper.categoryName()) //the name of the category. The lang helper gives us the correct translation key.
                .withIcon("minecraft:nether_star") //the icon for the category. In this case we simply use an existing item.
                .build();
    }
    ```
3. Now we need to add our category to the book. In `makeDemoBook` add:
   1. below `helper.book(bookName);`:
    ```java
    var featuresCategory = this.makeFeaturesCategory(helper);
    ```  
    1. below `.withCreativeTab("modonomicon")`:
    ```java 
    .withCategories(featuresCategory) 
    ```

This will create a category with the id "features" using a nether star as icon and add it to our book. See also **[Categories](../../basics/structure/categories.md#attributes)** to learn more about the other attributes of a category, and how icons work.    

We also already set up the entryHelper which gives us an idea where entries will be shown in the category in-game.


Let's see if that fixed our crash:

1. In the terminal, run `./gradlew runData` to generate the json file(s).
2. After it is complete, run `./gradlew runClient` to start Minecraft.
3. Re-join our old world.
4. Right click with the book in hand.
5. Et voila: 
   ![Category](/img/docs/getting-started/step3-create-category.png)
6. Success! No crash, but no content either. Not too bad, right?
7. You will notice that when hovering over the category's button on the left side we again have a weird text instead of a nice category name - no worries, we'll fix that later!

## Our first Entry

1. Open `DemoBookProvider.java`
2. 2. Add the following code to the bottom of the file, before the last `}`:
    ```java
    private BookEntryModel makeMultiblockEntry(BookLangHelper helper, EntryLocationHelper entryHelper, char location) {
        helper.entry("multiblock"); //tell our lang helper the entry we are in

        helper.page("intro"); //and now the page
        var multiBlockIntroPage =
                BookTextPageModel.builder() //we start with a text page
                .withText(helper.pageText()) //lang key for the text
                .withTitle(helper.pageTitle()) //and for the title
                .build();

        helper.page("multiblock"); //next page
        var multiblockPreviewPage =
                BookMultiblockPageModel.builder() //now a page to show a multiblock
                .withMultiblockId("modonomicon:blockentity") //sample multiblock from modonomicon
                .withMultiblockName("multiblocks.modonomicon_demo_book.blockentity") //and the lang key for its name
                .withText(helper.pageText()) //plus a page text
                .build();

        return BookEntryModel.builder()
                .withId(this.modLoc(helper.category + "/" + helper.entry)) //make entry id from lang helper data
                .withName(helper.entryName()) //entry name lang key
                .withDescription(helper.entryDescription()) //entry description lang key
                .withIcon("minecraft:furnace") //we use furnace as icon
                .withLocation(entryHelper.get(location)) //and we place it at the location we defined earlier in the entry helper mapping
                .withPages(multiBlockIntroPage, multiblockPreviewPage) //finally we add our pages to the entry
                .build();
    }
    ```
3. Now we need to add our entry to the features category. In `makeFeaturesCategory` add:
   1. below `entryHelper.setMap( ... );`:
    ```java
    //place the multiblock entry where we put the "m" in the map above
    var multiblockEntry = this.makeMultiblockEntry(helper, entryHelper, 'm');
    ```  
    1. below `.withIcon("minecraft:nether_star")`:
    ```java 
    .withEntries(multiblockEntry)
    ```

This will create an entry with a text page and a page that displays a multiblock. 
Text and title properties can be skipped, then the page will simply not use them. Especially pages with content like multiblocks or recipes may not need a text, or are better off without a text because there is only very little space on the page, and you can always add additional text pages to explain things in more detail.

:::info

For now let's not worry about multiblocks - we're using a demo one that comes with modonomicon. Later you can define your own multiblocks.

<!-- Link to multiblock guide -->

:::

Let's take a look at our entry!

1. In the terminal, run `./gradlew runData` to generate the json file(s).
2. After it is complete, run `./gradlew runClient` to start Minecraft.
3. Re-join our old world.
4. Right click with the book in hand.
5. Find and click the entry in the book (you may have to zoom/pan to find it)
   ![Entry](/img/docs/getting-started/step3-create-entry.png)
6. Still no nice texts, but we see a multiblock, so that's pretty good, right?

## Results

You can view the final code for this step in the branch for step 3: https://github.com/klikli-dev/modonomicon-demo-book/tree/guide/step3 

Using the green "Code" Button and "Download ZIP" you can download the code for this step as a zip file to compare to your code.

:::info

There is no branch for step 2, because that was only reviewing the files you downloaded in step 1!

::: 