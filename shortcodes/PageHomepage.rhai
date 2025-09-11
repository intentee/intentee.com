fn template(context, props, content) {
  context.assets.add("resources/css/page-homepage.css");
  context.assets.add("resources/ts/controller-homepage.tsx");

  component {
    <LayoutMinimal>
      <div class="homepage">
        <div data-poet-permanent id="stage"></div>
      </div>
    </LayoutMinimal>
  }
}
