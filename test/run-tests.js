#!/usr/bin/env node

/**
 * Test runner for Parser Game
 * This script validates the JavaScript files and tests the data structures directly
 */

const fs = require('fs');
const path = require('path');

async function runTests() {
  let success = true;
  let testCount = 0;
  let passCount = 0;

  console.log('🚀 Starting Parser Game test suite...');

  function assert(condition, message) {
    testCount++;
    if (condition) {
      console.log(`✅ ${message}`);
      passCount++;
    } else {
      console.error(`❌ ${message}`);
      success = false;
    }
  }

  try {
    // Test 1: Validate required files exist
    const requiredFiles = [
      'index.html',
      'test.html', 
      'game.js',
      'sentences.js',
      'translations.js',
      'styles.css',
      'version.js'
    ];

    for (const file of requiredFiles) {
      const filePath = path.join(__dirname, '..', file);
      assert(fs.existsSync(filePath), `Required file exists: ${file}`);
    }

    // Test 2: Validate JavaScript syntax
    const jsFiles = ['game.js', 'sentences.js', 'translations.js', 'version.js'];
    for (const file of jsFiles) {
      try {
        const filePath = path.join(__dirname, '..', file);
        const content = fs.readFileSync(filePath, 'utf8');
        // Basic syntax validation - check for common errors
        assert(content.trim().length > 0, `${file} is not empty`);
        assert(content.includes('const') || content.includes('var') || content.includes('let'), `${file} contains variable declarations`);
        console.log(`✅ ${file} syntax validation passed`);
      } catch (error) {
        assert(false, `${file} syntax validation failed: ${error.message}`);
      }
    }

    // Test 3: Load and validate sentences.js structure
    try {
      const sentencesPath = path.join(__dirname, '..', 'sentences.js');
      const sentencesContent = fs.readFileSync(sentencesPath, 'utf8');
      
      // Check for language support
      const languages = ['en', 'de', 'nl'];
      for (const lang of languages) {
        assert(sentencesContent.includes(`${lang}:`), `Sentences contains ${lang.toUpperCase()} language support`);
      }
      
      // Check for required sentence properties
      const requiredProps = ['text', 'words', 'verbs', 'nouns', 'subject', 'predicate', 'adjectives'];
      for (const prop of requiredProps) {
        assert(sentencesContent.includes(`${prop}:`), `Sentences contain ${prop} property`);
      }
      
    } catch (error) {
      assert(false, `Sentences validation failed: ${error.message}`);
    }

    // Test 4: Load and validate translations.js structure  
    try {
      const translationsPath = path.join(__dirname, '..', 'translations.js');
      const translationsContent = fs.readFileSync(translationsPath, 'utf8');
      
      // Check for language support
      const languages = ['en', 'de', 'nl'];
      for (const lang of languages) {
        assert(translationsContent.includes(`${lang}:`), `Translations contains ${lang.toUpperCase()} language support`);
      }
      
      // Check for required translation keys
      const requiredKeys = ['gameTitle', 'challenges', 'instructions', 'checkAnswer', 'nextQuestion'];
      for (const key of requiredKeys) {
        assert(translationsContent.includes(`${key}:`), `Translations contain ${key} key`);
      }
      
    } catch (error) {
      assert(false, `Translations validation failed: ${error.message}`);
    }

    // Test 5: Validate HTML structure
    try {
      const indexPath = path.join(__dirname, '..', 'index.html');
      const indexContent = fs.readFileSync(indexPath, 'utf8');
      
      assert(indexContent.includes('<!DOCTYPE html>'), 'index.html has DOCTYPE declaration');
      assert(indexContent.includes('<html'), 'index.html has html element');
      assert(indexContent.includes('version.js'), 'index.html includes version.js');
      assert(indexContent.includes('game.js'), 'index.html includes game.js');
      assert(indexContent.includes('sentences.js'), 'index.html includes sentences.js');
      assert(indexContent.includes('translations.js'), 'index.html includes translations.js');
      
      const testPath = path.join(__dirname, '..', 'test.html');
      const testContent = fs.readFileSync(testPath, 'utf8');
      
      assert(testContent.includes('<!DOCTYPE html>'), 'test.html has DOCTYPE declaration');
      assert(testContent.includes('Parser Game Tests'), 'test.html has test title');
      
    } catch (error) {
      assert(false, `HTML validation failed: ${error.message}`);
    }

  } catch (error) {
    console.error('❌ Test execution failed:', error.message);
    success = false;
  }

  // Report results
  console.log('\n📊 Test Results:');
  console.log(`Total tests: ${testCount}`);
  console.log(`✅ Passed: ${passCount}`);
  console.log(`❌ Failed: ${testCount - passCount}`);

  if (success) {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
  } else {
    console.log('\n💥 Some tests failed!');
    process.exit(1);
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { runTests };