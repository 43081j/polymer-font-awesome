# \<polymer-font-awesome\>

This is a very simple wrapper around the [FontAwesome](https://github.com/FortAwesome/Font-Awesome) toolkit.

## Motivation

Solutions for this already exist, arguably in a more Polymer-like way, by maintaining a list of SVGs taken from the original font and placing them in an [iron-iconset](https://github.com/PolymerElements/iron-iconset).

However a couple of issues exist with this:

* SVGs must be extracted and altered per FontAwesome update, so it is no longer identical to the source
* Developers are often already familiar with FontAwesome's class names and namespacing, not the Polymer-like equivalent
* Existing code already uses FontAwesome class names (e.g. `fa-check`) which usually do not match up with their Polymer equivalents

This is a very thin wrapper, primarily created for my own use cases. So if you disagree and prefer the iconset solution, feel free to use those instead.
