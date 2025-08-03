export interface Theme {
  name: string;
  classes: {
    body: string; // Bootstrap classes for page background/text color
    header: string; // Bootstrap classes for Navbar
    button: string; // Bootstrap classes for buttons
    layout: string; // Bootstrap container type (container / container-fluid)
  };
  fontFamily: string; // Font family for the theme
}
