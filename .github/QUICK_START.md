# Quick Start: Using Custom Agents with GitHub Copilot

This quick reference guide helps you start using custom agents with GitHub Copilot in this project.

## 🚀 Quick Setup (2 minutes)

### Step 1: Enable GitHub Copilot
Make sure GitHub Copilot is enabled in your IDE:
- **VS Code**: Install the GitHub Copilot extension
- **JetBrains**: Install the GitHub Copilot plugin
- **Visual Studio**: Install from Extensions menu

### Step 2: Repository Configuration
This repository already includes:
- ✅ `.github/copilot-instructions.md` - Project-specific instructions
- ✅ `CUSTOM_AGENTS_GUIDE.md` - Detailed documentation
- ✅ `.github/agent-examples.md` - Example scenarios

### Step 3: Start Coding
Copilot automatically uses the custom instructions. Just start coding!

## 💡 Common Use Cases

### Creating a New Component

**Type:**
```typescript
// Create a new button component for flashcard actions
```

**Copilot will suggest:**
```typescript
import React from 'react';
import styles from './ActionButton.module.css';

interface IActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const ActionButton: React.FC<IActionButtonProps> = ({
  label,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
```

### Adding New Flashcard Data

**Type:**
```typescript
// Add 3 new verb flashcards
```

**Copilot will suggest:**
```typescript
{
  category: 'verbs',
  spanish: 'hablar',
  english: 'to speak',
  quiz: {
    type: 'multiple_choice',
    options: ['to speak', 'to listen', 'to write', 'to read'],
    correctIndex: 0
  }
},
// ... more suggestions
```

### Creating Tests

**Type:**
```typescript
// Test flashcard flip functionality
```

**Copilot will suggest:**
```typescript
describe('Flashcard flip', () => {
  it('should show English when flipped', () => {
    // Test implementation following project patterns
  });
});
```

## 🎯 Tips for Better Suggestions

### 1. Use Descriptive Comments
```typescript
// Good: Create a quiz component with multiple choice options
// Bad: Make quiz thing
```

### 2. Reference Existing Patterns
```typescript
// Use the same pattern as FlashcardComponent
```

### 3. Specify Requirements
```typescript
// Component needs: Spanish word, English translation, flip button
// Use CSS Modules, TypeScript interface, React hooks
```

### 4. Ask for Specific Styles
```typescript
// Style this card like the HomePage cards with shadow and hover effect
```

## 🔧 Troubleshooting

### Problem: Generic Suggestions
**Solution**: Add more specific comments referencing project patterns

### Problem: Wrong File Structure
**Solution**: Mention the target directory in your comment
```typescript
// Create in src/components/
```

### Problem: Not Following TypeScript
**Solution**: Start with interface definition
```typescript
interface IMyComponentProps {
  // Copilot will follow this pattern
}
```

## 📚 Learn More

- **Full Guide**: [CUSTOM_AGENTS_GUIDE.md](../CUSTOM_AGENTS_GUIDE.md)
- **Examples**: [.github/agent-examples.md](./agent-examples.md)
- **Instructions**: [.github/copilot-instructions.md](./copilot-instructions.md)

## 🤝 Keyboard Shortcuts

| Action | VS Code | JetBrains |
|--------|---------|-----------|
| Accept suggestion | `Tab` | `Tab` |
| Reject suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Alt+]` |
| Previous suggestion | `Alt+[` | `Alt+[` |
| Open Copilot Chat | `Ctrl+Shift+I` | `Ctrl+Shift+I` |

## ✨ Pro Tips

1. **Start with comments**: Write what you want, then let Copilot generate
2. **Use Tab liberally**: Accept suggestions quickly
3. **Iterate**: Accept, modify, continue - don't expect perfection first time
4. **Context matters**: Open related files for better suggestions
5. **Use Chat**: Ask questions in Copilot Chat for explanations

---

**Ready to code?** Open any file and start typing! Copilot is configured and ready to help. 🎉
