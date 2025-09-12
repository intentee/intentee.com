fn template(context, props, content) {
  context.assets.add("resources/css/page-homepage.css");
  context.assets.add("resources/ts/controller-homepage.tsx");

  component {
    <LayoutMinimal>
      <div data-poet-permanent id="homepage"></div>
    </LayoutMinimal>
  }
}
