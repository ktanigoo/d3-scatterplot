import * as d3 from "d3";

export function DropdownBuilder() {
  let createDowndownMenu = (nameAttribute, containerClass, dropdownClass) => {
    return d3.select("body")
             .select(`.${containerClass}`)
             .insert("select", ':first-child')
             .attr("name", nameAttribute)
             .attr('class', dropdownClass);
  }

  let populateDropdownOptions = (dropdown, data) => {
    return dropdown.selectAll('option')
                   .data(data)
                   .enter()
                   .append('option')
                   .text((featureName) => (featureName));
  };
  let createAllDropdowns = () => {
    this.clickOnFeatureDropdown = createDowndownMenu(
      'color_column',
      'click-on-feature-container',
      'click-on-feature'
    );
    this.coloringDropdown = createDowndownMenu(
      'color_column',
      'color-by-feature-container',
      'color-by-feature'
    );
    this.searchDropdown = createDowndownMenu(
      'color_column',
      'search-by-feature-container',
      'search-by-feature'
    );
    this.shapingDropdown = createDowndownMenu(
      'color_column',
      'shape-by-feature-container',
      'shape-by-feature'
    );
    this.transparentDropdown = createDowndownMenu(
      'color_column',
      'transparency-by-feature-container',
      'transparency-by-feature'
    );
  };
  this.build = (categorySearchData, categories) => {
    createAllDropdowns();
    // Searching
    populateDropdownOptions(this.searchDropdown, categorySearchData);
    // Coloring
    populateDropdownOptions(this.coloringDropdown, categories);
    // Transparent
    populateDropdownOptions(this.transparentDropdown, categorySearchData);
    // Click on feature
    populateDropdownOptions(this.clickOnFeatureDropdown, categorySearchData);
    // Shaping
    populateDropdownOptions(this.shapingDropdown, categories);
  };
  this.setDropdownEventHandlers = (redrawFunction) => {
    this.coloringDropdown.on("change", redrawFunction);

    // Shaping
    this.shapingDropdown.on("change", redrawFunction);
  };
};