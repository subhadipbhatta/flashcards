# GitHub Configuration Files

This directory contains configuration and documentation for GitHub integrations, particularly GitHub Copilot custom agents.

## Files in this Directory

### 📋 copilot-instructions.md
**Primary configuration file** that GitHub Copilot reads automatically.

**Purpose**: Provides project-specific context, code style guidelines, and best practices to guide Copilot's suggestions.

**Usage**: Automatically loaded by Copilot - no action needed from developers.

### 🚀 QUICK_START.md
**Quick reference guide** for developers new to using custom agents.

**Purpose**: Get started with custom agents in 2 minutes with common use cases and tips.

**Usage**: Read this first when joining the project.

### 📚 agent-examples.md
**Practical examples** for common development scenarios.

**Purpose**: Copy-paste examples showing how to leverage custom agents for different tasks (components, tests, styling, etc.).

**Usage**: Reference when working on specific types of tasks.

### 🔍 IMPLEMENTATION_OVERVIEW.md
**Visual overview** of the custom agents implementation.

**Purpose**: Understand how custom agents work, the file structure, and the workflow.

**Usage**: For understanding the system architecture and maintenance.

## Related Documentation

- **[CUSTOM_AGENTS_GUIDE.md](../CUSTOM_AGENTS_GUIDE.md)** - Comprehensive guide in the repository root

## Quick Links

| Task | Document |
|------|----------|
| Getting started | [QUICK_START.md](./QUICK_START.md) |
| Copy examples | [agent-examples.md](./agent-examples.md) |
| Understand implementation | [IMPLEMENTATION_OVERVIEW.md](./IMPLEMENTATION_OVERVIEW.md) |
| Full documentation | [CUSTOM_AGENTS_GUIDE.md](../CUSTOM_AGENTS_GUIDE.md) |
| Configuration | [copilot-instructions.md](./copilot-instructions.md) |

## For Maintainers

When updating custom agent instructions:

1. Update `copilot-instructions.md` with new patterns/guidelines
2. Add examples to `agent-examples.md` if applicable
3. Test that suggestions improve
4. Update this README if adding new files

---

**Questions?** See the [main guide](../CUSTOM_AGENTS_GUIDE.md) or reach out to the team.
