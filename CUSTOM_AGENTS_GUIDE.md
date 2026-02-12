# How to Incorporate Custom Agents on GitHub Copilot

This guide explains how to use custom agents and instructions with GitHub Copilot to enhance your development experience in this repository.

## Table of Contents

1. [What Are Custom Agents?](#what-are-custom-agents)
2. [Setting Up Custom Instructions](#setting-up-custom-instructions)
3. [Using Copilot Instructions File](#using-copilot-instructions-file)
4. [Creating Agent-Specific Instructions](#creating-agent-specific-instructions)
5. [Best Practices](#best-practices)
6. [Examples](#examples)

## What Are Custom Agents?

Custom agents in GitHub Copilot are specialized AI assistants that can be configured with specific knowledge about your project, coding standards, and domain expertise. They help provide more contextually relevant suggestions and code completions.

### Benefits
- **Context-Aware**: Understands your project structure and conventions
- **Consistent**: Follows your team's coding standards
- **Efficient**: Reduces time spent on boilerplate and repetitive tasks
- **Educational**: Helps team members learn project-specific patterns

## Setting Up Custom Instructions

### Method 1: Using `.github/copilot-instructions.md`

GitHub Copilot automatically reads instructions from `.github/copilot-instructions.md` in your repository. This file should contain:

1. **Project Context**: Overview of your application
2. **Code Style Guidelines**: Language-specific conventions
3. **Domain Knowledge**: Business logic and terminology
4. **Best Practices**: Project-specific recommendations

**Example Structure:**

```markdown
# GitHub Copilot Custom Instructions

## Project Context
Brief description of your project...

## Code Style Guidelines
### TypeScript
- Use functional components
- Prefer hooks over class components
...

## Domain Knowledge
Key concepts and terminology...

## Best Practices
1. Follow existing patterns
2. Write tests
...
```

### Method 2: Repository-Level Settings

You can also configure custom instructions through GitHub repository settings:

1. Go to your repository settings
2. Navigate to "Copilot" section
3. Add custom instructions for the repository
4. These instructions apply to all contributors

### Method 3: Personal Copilot Settings

For personal preferences across multiple projects:

1. Open GitHub Copilot settings in your IDE
2. Add custom instructions in your user settings
3. These apply to all your projects

## Using Copilot Instructions File

The `.github/copilot-instructions.md` file in this repository contains:

### 1. Project-Specific Context
Helps Copilot understand this is a flashcards application with specific features like:
- Study Mode
- Quiz Mode
- Statistics tracking

### 2. Code Style Guidelines
Ensures generated code follows project conventions:
- Functional components with TypeScript
- CSS Modules for styling
- React hooks for state management

### 3. Domain Knowledge
Provides context about flashcard structure and educational features

### 4. Best Practices
Guides Copilot to suggest optimal solutions for this project

## Creating Agent-Specific Instructions

You can create specialized instructions for different types of tasks:

### Development Agent

Create focused instructions for feature development:

```markdown
When developing new features:
1. Check existing component patterns
2. Create corresponding CSS modules
3. Add TypeScript types
4. Update routing if needed
```

### Testing Agent

Provide guidelines for test creation:

```markdown
When writing tests:
1. Follow existing test structure
2. Test user interactions
3. Mock external dependencies
4. Aim for high coverage
```

### Documentation Agent

Guide documentation updates:

```markdown
When updating docs:
1. Keep README.md current
2. Add JSDoc comments
3. Update API documentation
4. Include examples
```

## Best Practices

### 1. Keep Instructions Concise
- Focus on project-specific information
- Avoid generic programming advice
- Prioritize actionable guidelines

### 2. Update Regularly
- Review and update instructions as project evolves
- Add new patterns as they emerge
- Remove outdated conventions

### 3. Include Examples
- Show concrete code examples
- Demonstrate preferred patterns
- Highlight common pitfalls to avoid

### 4. Structure Information
- Use clear headings and sections
- Make information easy to scan
- Group related guidelines together

### 5. Collaborate with Team
- Get input from all team members
- Align on coding standards
- Document team decisions

## Examples

### Example 1: Creating a New Component

With custom instructions, when you type:

```typescript
// Create a new flashcard component
```

Copilot will suggest code following your project's patterns:

```typescript
import React, { useState } from 'react';
import styles from './FlashcardComponent.module.css';

interface IFlashcardProps {
  spanish: string;
  english: string;
  category: string;
}

export const FlashcardComponent: React.FC<IFlashcardProps> = ({
  spanish,
  english,
  category
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.flashcard}>
      {/* Component implementation */}
    </div>
  );
};
```

### Example 2: Adding a New Route

When working on routing:

```typescript
// Add route for statistics page
```

Copilot suggests following the existing routing pattern:

```typescript
<Route path="/statistics" element={<StatisticsPage />} />
```

### Example 3: State Management

When managing state:

```typescript
// Add state for flashcard progress
```

Copilot suggests using React hooks:

```typescript
const [progress, setProgress] = useState<number>(0);
const [correctAnswers, setCorrectAnswers] = useState<number>(0);
```

## Advanced Features

### 1. Context-Aware Completions

Custom instructions help Copilot provide suggestions that:
- Match your file structure
- Follow your naming conventions
- Use your preferred libraries and patterns

### 2. Inline Documentation

Copilot can generate comments and documentation that align with your style:

```typescript
/**
 * Handles flashcard flip interaction
 * Updates the isFlipped state to show/hide translation
 */
const handleFlip = () => {
  setIsFlipped(!isFlipped);
};
```

### 3. Test Generation

With proper instructions, Copilot can generate tests matching your testing framework:

```typescript
describe('FlashcardComponent', () => {
  it('should flip when clicked', () => {
    // Test implementation following project patterns
  });
});
```

## Troubleshooting

### Instructions Not Being Applied

1. **Check File Location**: Ensure `.github/copilot-instructions.md` is in the repository root
2. **Restart IDE**: Reload your editor to pick up changes
3. **Clear Cache**: Clear Copilot cache in IDE settings
4. **Check Permissions**: Ensure Copilot has repository access

### Getting Generic Suggestions

1. **Add More Context**: Provide more project-specific information
2. **Include Examples**: Show concrete code patterns
3. **Be Specific**: Avoid vague guidelines
4. **Update Instructions**: Keep instructions current with codebase

### Conflicts Between Instructions

1. **Prioritize**: Order instructions by importance
2. **Be Clear**: Remove ambiguous guidelines
3. **Test**: Verify suggestions match expectations
4. **Iterate**: Refine instructions based on results

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot for Business](https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise)
- [Copilot Instructions Guide](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)

## Contributing

To improve custom instructions for this project:

1. Identify gaps or unclear guidance
2. Propose updates via pull request
3. Test suggestions with updated instructions
4. Document changes in PR description

## Feedback

If you notice Copilot suggestions not aligning with project standards:

1. Review `.github/copilot-instructions.md`
2. Add or clarify relevant guidelines
3. Share feedback with the team
4. Iterate on instructions

---

**Last Updated**: February 2026
**Maintained By**: Development Team
