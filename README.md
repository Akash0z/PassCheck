# Password Strength Analyzer & Generator API

## Introduction

A simple backend project built with Node.js and Express that checks how strong a password is and generates secure new passwords. No database — just clean backend logic focused on real security concepts like entropy scoring and cryptographically secure randomness.

## Overview

Most password checkers just look for "does it have a symbol" or "is it 8 characters." This project instead calculates actual entropy to score password strength, checks submitted passwords against a list of commonly leaked passwords, and generates new passwords using Node's built-in crypto module instead of `Math.random()`. It's fully server-rendered with EJS and styled using Tailwind CSS.

## Features

- Password strength checker with entropy-based scoring (weak / fair / good / strong)
- Common-password detection against a leaked-password list
- Secure password generator with customizable length and character options
- Rate limiting on both endpoints to prevent abuse
- Server-rendered UI built with EJS and Tailwind CSS

## Tech stack

- Node.js
- Express.js
- EJS
- Tailwind CSS
- Node crypto module
- dotenv

## Why no database

This project doesn't need to store anything — every request is a self-contained calculation (check a password or generate one), with nothing to persist across requests. Keeping it database-free kept the project focused purely on backend logic and security reasoning instead of data modeling.

## Security notes

- Password generation uses `crypto.randomInt()` instead of `Math.random()`, since generating a secure password requires true unpredictability
- Generated characters are shuffled using the Fisher-Yates algorithm to avoid predictable patterns
- Passwords are never logged or stored anywhere
- Both endpoints are rate-limited per IP to prevent abuse

## Getting started

\`\`\`bash
git clone [your-repo-url]
cd password-strength-api
npm install
cp .env.example .env
npm run dev
\`\`\`

The app runs on \`http://localhost:3000\` by default.

## Deployment

Deployed on [Render / Railway — add whichever you used].
