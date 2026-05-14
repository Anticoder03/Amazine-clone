# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows Semantic Versioning.

## [Unreleased]

## [0.1.0] - 2026-05-14

### Added
- Initial Amazon-style navbar implementation in [src/components/Navbar.jsx](src/components/Navbar.jsx).
- Search bar with category selector, input, and search action button.
- Right-side navbar modules for language, account, returns, and cart display.

### Changed
- Refined navbar structure into left, center, and right grouped sections.
- Updated visual styling in [src/components/css/Navbar.css](src/components/css/Navbar.css) to match Amazon-inspired spacing, colors, and hover states.
- Improved cart presentation with item count badge and icon emphasis.

### Fixed
- Corrected CSS selector issue in [src/components/css/Navbar.css](src/components/css/Navbar.css) by restoring the missing `.center .inputbox` block.
