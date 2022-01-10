function get_atesman_readability(element){
	let article = element.textContent || element.innerText;
	article = article.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g, ' ');
	
	const words = Math.max(1, (article.match(/ /g) || []).length);
	const syllables  = (article.match(/a|e|ı|i|o|ö|u|ü|A|E|O|Ö|I|İ|U|Ü/g) || []).length;
	const sentences = Math.max(1, (article.match(/\.|\?|\:|\!/g) || []).length);
	
	let atesman = parseInt(((198825/1000) - ((40175/1000)*(syllables /words))) - ((2610/1000)*(words/sentences)));
	
	if(atesman <= 10 || atesman >= 101){
		atesman = 101; // more about this below
	}

	return atesman;
}


function get_reading_grade(atesman) {
  const b = atesman - 20, c = atesman - 35, d = atesman - 50;
  atesman -= 80;
 /*
	* 0 - 23 -> 12th grade
	* 24 - 31 -> 11th grade
	* 32 - 35 -> 10th grade
	* 36 - 41 -> 9th grade
	* 42 - 47 -> 8th grade
	* 48 - 51 -> 7th grade
	* 52 - 57 -> 6th grade
	* 58 - 65 -> 5th grade
	* 66 - 77 -> 4th grade
	
	* after this point, the text becames so extremely simple that it's not as easy
	* to read. Check this example with 98/100 readability:
	* "Oku na bi lir lik, me tin lerle ilgi li bazı ni cel veri ler sunarlar."
	* Even tho most articles on the topic claims it's either "easy" after 70/100,
	* or "very easy" after 89/100, above example shows how 
	* a "too simple" text can mean less readability.
	* So after 77, I started increasing the grade again:
	
	* 78 - 83 -> 5th grade
	* 84 - 87 -> 6th grade
	* 88 - 90 -> 7th grade
	* 91 - 93 -> 8th grade
	* 94 - 95 -> 9th grade
	* 96 - 97 -> 10th grade
	* 98 - 99 -> 11th grade
	* 100 	  -> 12th grade
	* Below I use interpolation to achive these results.
	*/
  return parseInt(
      (c * d * atesman) / -2250 +
      (b * d * atesman) / 1012 +
      (b * c * atesman) / -1929 +
      (b * c * d) / 16200 +
      0.3
  );
}
