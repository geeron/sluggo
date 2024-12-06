# Roadmap

This document outlines the planned features and improvements for the `sluggo` package.

## Features to Implement

#### Encode URI Safe

- Ensure that the slug does not contain any `%` or special characters when encoded as a URI.

#### Replace Similar Separators

- Implement functionality to replace similar separators with a common one.
- Example: There are many types of dashes, but to the human eye, they all seem similar and can cause errors. Use a default dash, but allow specifying a different one if needed.

#### Keep Separators

- Add an option to specify if certain separators should not be converted.
- Example: Prevent converting underscores (`_`) to dashes (`-`).

## Contributing

We welcome contributions from the community! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your fork.
5. Open a pull request to the main repository.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests. For more details, see the [CONTRIBUTING.md](CONTRIBUTING.md) file.
