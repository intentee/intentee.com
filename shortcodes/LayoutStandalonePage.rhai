fn template(context, props, content) {
  context.assets.add("resources/css/layout-standalone-page.css");

  component {
    <LayoutMinimal>
      <div class=" formatted-text standalone-page">
        {content}
      </div>
    </LayoutMinimal>
  }
}
