'use client'

/**
 * MODULE 5: Final Project - Portfolio Website
 *
 * This is your capstone project! You'll build a complete personal portfolio
 * website using everything you've learned:
 * - Agent Mode for scaffolding large sections
 * - Edit Mode for surgical refinements
 * - Ask Mode for guidance and improvements
 * - Your rules for consistent styling
 *
 * Follow the step-by-step instructions marked below.
 */

export default function Home () {
  return (
    <div className='min-h-screen'>
      {/* ==========================================
       * 📋 PROJECT OVERVIEW
       * ==========================================
       *
       * You'll build a portfolio with these sections:
       * ✓ Header with navigation
       * ✓ Hero section with name and tagline
       * ✓ Projects grid with cards
       * ✓ About section with bio and skills
       * ✓ Contact form
       * ✓ Footer with social links
       *
       * Use Agent Mode (Claude or Auto model) for big sections,
       * then Edit Mode (Inline Chat) for refinements!
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 1: SCAFFOLD BASE LAYOUT
       * ==========================================
       *
       * ✅ TODO: CREATE THE BASIC LAYOUT STRUCTURE
       *
       * Instructions:
       * 1. Open Copilot Chat panel
       * 2. Set model to Claude or Auto
       * 3. Ask: "Create a portfolio layout with header, hero section,
       *         projects grid, and footer"
       * 4. Review the scaffolded structure
       * 5. Accept if it has all four sections
       *
       * IMPORTANT: Replace this entire component with the generated layout!
       *
       * ========================================== */}

      <div className='p-8 max-w-4xl mx-auto'>
        <div className='bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 mb-8'>
          <h1 className='text-3xl font-bold mb-4'>
            🚀 Ready to Build Your Portfolio?
          </h1>
          <p className='mb-4 text-gray-700'>
            This is where your portfolio will live. Follow the steps below to
            build it with Copilot as your coding partner!
          </p>
          <div className='bg-white rounded p-4 border border-yellow-300'>
            <h2 className='font-semibold mb-2'>Quick Start Guide:</h2>
            <ol className='list-decimal list-inside space-y-2 text-sm'>
              <li>Read STEP 1 instructions above</li>
              <li>Open Copilot Chat (Ctrl/Cmd + Shift + I)</li>
              <li>Switch to Agent Mode with Claude/Auto model</li>
              <li>Ask Copilot to create the base layout</li>
              <li>Replace this placeholder with your new layout</li>
              <li>Continue with STEP 2, 3, 4, etc.</li>
            </ol>
          </div>
        </div>

        {/* Placeholder sections to guide structure */}
        <section className='border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6'>
          <h2 className='text-xl font-semibold text-gray-500'>
            📍 Header Section
          </h2>
          <p className='text-gray-400'>Your navigation will go here</p>
        </section>

        <section className='border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6'>
          <h2 className='text-xl font-semibold text-gray-500'>
            📍 Hero Section
          </h2>
          <p className='text-gray-400'>
            Your introduction and tagline will go here
          </p>
        </section>

        <section className='border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6'>
          <h2 className='text-xl font-semibold text-gray-500'>
            📍 Projects Grid
          </h2>
          <p className='text-gray-400'>Your project cards will go here</p>
        </section>

        <section className='border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6'>
          <h2 className='text-xl font-semibold text-gray-500'>📍 Footer</h2>
          <p className='text-gray-400'>Your social links will go here</p>
        </section>
      </div>

      {/* ==========================================
       * 🎯 STEP 2: FILL IN THE HERO SECTION
       * ==========================================
       *
       * ✅ TODO: ADD CONTENT TO HERO SECTION
       *
       * Once you have the base layout, enhance the hero:
       *
       * Instructions:
       * 1. Highlight the hero section in your new layout
       * 2. Use Inline Chat (Ctrl/Cmd + I)
       * 3. Ask: "Hero with my name, tagline, and a 'Contact Me' button"
       * 4. Customize with your actual name and tagline
       * 5. Refine: "Make the button a mailto: link to [your-email]"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 3: BUILD THE PROJECTS GRID
       * ==========================================
       *
       * ✅ TODO: ADD PROJECT CARDS
       *
       * Instructions:
       * 1. Highlight the projects section
       * 2. Use Agent Mode
       * 3. Ask: "Projects section with cards: title, description,
       *         image placeholder, and link"
       * 4. Add 3-4 sample projects
       * 5. Refine with Inline Chat: "Add a hover animation for each card"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 4: CREATE THE FOOTER
       * ==========================================
       *
       * ✅ TODO: ADD FOOTER WITH SOCIAL LINKS
       *
       * Instructions:
       * 1. Highlight the footer section
       * 2. Use Inline Chat
       * 3. Ask: "Footer with copyright and links to GitHub,
       *         LinkedIn, Twitter"
       * 4. Refine: "Add aria-labels for social links"
       * 5. Update with your actual social media URLs
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 5: ADD AN ABOUT SECTION
       * ==========================================
       *
       * ✅ TODO: INSERT ABOUT SECTION
       *
       * Instructions:
       * 1. Place cursor between Projects and Footer
       * 2. Use Agent Mode
       * 3. Ask: "About section with my photo placeholder,
       *         short bio, and list of skills"
       * 4. Refine: "Use Tailwind spacing consistent with Hero section"
       * 5. Refine: "Keep the About text in a centered column"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 6: ADD CONTACT FORM
       * ==========================================
       *
       * ✅ TODO: CREATE CONTACT FORM
       *
       * Instructions:
       * 1. Add a new section before the footer
       * 2. Use Agent Mode
       * 3. Ask: "Add a contact form with name, email,
       *         message and basic validation"
       * 4. Use Edit Mode: "Disable submit until all fields are valid"
       * 5. Add: "Show success message after submission"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 7: ADD DARK MODE (OPTIONAL)
       * ==========================================
       *
       * ✅ TODO: IMPLEMENT DARK MODE TOGGLE
       *
       * Instructions:
       * 1. Highlight the header
       * 2. Use Agent Mode
       * 3. Ask: "Add dark mode toggle in the header"
       * 4. Test the toggle works across all sections
       * 5. Refine colors if needed
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 STEP 8: POLISH & ANIMATIONS
       * ==========================================
       *
       * ✅ TODO: ADD FINISHING TOUCHES
       *
       * Use Edit Mode for these refinements:
       * 1. "Fade in hero section on page load"
       * 2. "Add smooth scroll behavior for navigation links"
       * 3. "Improve spacing and typography hierarchy"
       * 4. "Ensure all sections are responsive on mobile"
       * 5. "Add loading states where appropriate"
       *
       * ========================================== */}

      {/* ==========================================
       * 🎯 FINAL REVIEW CHECKLIST
       * ==========================================
       *
       * Before you're done, verify:
       *
       * ✓ Responsive Design
       *   - Test on mobile, tablet, desktop viewports
       *   - Check text is readable at all sizes
       *
       * ✓ Accessibility
       *   - All interactive elements have aria-labels
       *   - Images have alt text
       *   - Keyboard navigation works
       *   - Color contrast is sufficient
       *
       * ✓ Consistency
       *   - Follows your .github/copilot-instructions.md rules
       *   - Uses Tailwind classes consistently
       *   - Arrow functions throughout
       *   - TypeScript types defined
       *
       * ✓ Functionality
       *   - All links work
       *   - Contact form validates input
       *   - Animations are smooth
       *   - No console errors
       *
       * ========================================== */}
    </div>
  )
}

/* ==========================================
 * 💡 TIPS FOR SUCCESS
 * ==========================================
 *
 * 1. START BIG, THEN REFINE
 *    - Use Agent Mode to scaffold entire sections quickly
 *    - Then use Edit Mode (Inline Chat) for small improvements
 *    - Don't try to get everything perfect in one prompt
 *
 * 2. ITERATE IN STEPS
 *    - Build one section at a time
 *    - Test each section before moving to the next
 *    - It's easier to debug small changes
 *
 * 3. USE ASK MODE FOR GUIDANCE
 *    - "What's the best way to structure this component?"
 *    - "How can I improve the performance here?"
 *    - "What accessibility features am I missing?"
 *
 * 4. CUSTOMIZE IT
 *    - Replace placeholder text with your real information
 *    - Add your own projects and achievements
 *    - Make it reflect your personality and style
 *
 * 5. LEARN BY REVIEWING
 *    - Don't just accept code blindly
 *    - Read what Copilot generates
 *    - Ask it to explain anything unclear
 *    - Understand the patterns so you can use them later
 *
 * 6. COMMON ISSUES & FIXES
 *    - Spacing looks off? → "Improve spacing using Tailwind"
 *    - Not responsive? → "Make this section responsive on mobile"
 *    - Missing types? → "Add TypeScript types for props"
 *    - Need animation? → "Add smooth transition animations"
 *
 * ========================================== */

/* ==========================================
 * 🎉 CONGRATULATIONS!
 * ==========================================
 *
 * When you complete this portfolio, you will have:
 *
 * ✓ Built a real, production-ready website with Copilot
 * ✓ Mastered Agent Mode for large scaffolding tasks
 * ✓ Used Edit Mode for precise refinements
 * ✓ Applied Ask Mode for strategic guidance
 * ✓ Leveraged rules for consistent code style
 * ✓ Created something you can actually deploy and share!
 *
 * NEXT STEPS:
 * - Deploy your portfolio to Vercel or Netlify
 * - Share it on LinkedIn and Twitter
 * - Keep practicing with Copilot on real projects
 * - Teach others what you've learned
 *
 * Remember: Copilot is a tool to amplify your skills,
 * not replace them. The more you understand code, the
 * better you'll be at directing Copilot to build
 * exactly what you envision.
 *
 * Happy coding! 🚀
 *
 * ========================================== */
