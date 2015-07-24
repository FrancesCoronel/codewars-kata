Test.expectError("Your function must pass in a string, not numbers!", getSubstrings(43243));
Test.assertEquals(getSubstrings("YOLO"), 9);
Test.assertEquals(getSubstrings("I am but a string in the meadow."), 511);
Test.assertEquals(getSubstrings("I am lowercase and UPPERCASE."), 406);
Test.assertEquals(getSubstrings("Oops!!!"), 24);
Test.assertEquals(getSubstrings("MMMMMMMMM"), 9);
Test.assertEquals(getSubstrings(""), 0);
Test.assertEquals(getSubstrings("I"), 1);
Test.assertEquals(getSubstrings("Maurice Moss"), 76);
Test.assertEquals(getSubstrings("Codewars Rules"), 102);