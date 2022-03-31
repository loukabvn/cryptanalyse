/* Generation de texte aleatoire */
const T1 = "le code cesar est un chiffrement base sur un decalage de l alphabet : deplacement des lettres plus loin dans l alphabet. il s agit d une substitution monoalphabetique, c est a dire qu une meme lettre n est remplacee que par une seule autre, toujours identique pour un meme message, le decalage le plus souvent utilise est de trois lettres";
const T2 = "l agence spatiale americaine a comme but explicite de trouver des traces de vie ancienne sur la planete rouge, en collectant pendant au moins deux ans jusqu a une trentaine d echantillons de roche. les cameras de Perseverance aideront les scientifiques a determiner l histoire geologique et les conditions ";
const T3 = "a bord de la fusee il y avait dix satellites lances par l entreprise elle meme ils font partie d un vaste projet baptise starlink. l idee, mettre en orbite des milliers dans de satellites pour fournir une connexion internet a haut debit partout sur terre";
const T4 = "une attaque informatique visant a empoisonner l eau distribuee a la population d une ville de floride a ete dejouee in extremis ont annonce lundi les autorités américaines Un incident qui souligne la vulnerabilite de certaines infrastructures critiques face à la menace posee par les pirates informatiques surtout en cette periode de crise sanitaire ";
const T5 = "c'etait une bonne soiree on a montre une tres bonne attitude c'est le plus important, titulaires, remplaçants, tous etaient unis, nous avons eu un bon etat d esprit, il y a eu de bonnes performances individuelles, des buts magnifiques et aucune blessure. les jeunes sont entres sur le terrain, je suis content avec tout le respect que je leur dois, nous avons de plus grandes ambitions que wolfsberger donc nous ne devons pas nous enflammer\n\njose mourinho entraineur de tottenham";
// les misérables
const T9 = "quoique ce detail ne touche en aucune maniere au fond meme de ce que nous avons a raconter, il n est peut-etre pas inutile, ne fut-ce que pour etre exact en tout, d indiquer ici les bruits et les propos qui avaient couru sur son compte au moment ou il etait arrive dans le diocese. vrai ou faux, ce qu on dit des hommes tient souvent autant de place dans leur vie et surtout dans leur destinee que ce qu ils font. m. myriel etait fils d un conseiller au parlement d aix; noblesse de robe. on contait de lui que son pere, le reservant pour heriter de sa charge, l avait marie de fort bonne heure, a dix-huit ou vingt ans, suivant un usage assez repandu dans les familles parlementaires. charles myriel, nonobstant ce mariage, avait, disait-on, beaucoup fait parler de lui. il etait bien fait de sa personne, quoique d assez petite taille, elegant, gracieux, spirituel; toute la premiere partie de sa vie avait ete donnee au monde et aux galanteries. la revolution survint, les evenements se precipiterent, les familles parlementaires decimees, chassees, traquees, se disperserent. m. charles myriel, des les premiers jours de la revolution, emigra en italie. sa femme y mourut d une maladie de poitrine dont elle etait atteinte depuis longtemps. ils n avaient point d enfants. que se passa-t-il ensuite dans la destinee de m. myriel? l ecroulement de l ancienne societe francaise, la chute de sa propre famille, les tragiques spectacles de 93, plus effrayants encore peut-etre pour les emigres qui les voyaient de loin avec le grossissement de l epouvante, firent-ils germer en lui des idees de renoncement et de solitude? fut-il, au milieu d une de ces distractions et de ces affections qui occupaient sa vie, subitement atteint d un de ces coups mysterieux et terribles qui viennent quelquefois renverser, en le frappant au coeur, l homme que les catastrophes publiques n ebranleraient pas en le frappant dans son existence et dans sa fortune? nul n aurait pu le dire; tout ce qu on savait, c est que, lorsqu il revint d italie, il etait pretre.";
// le petit prince
const T10 = "car je n aime pas qu on lise mon livre a la legere. j eprouve tant de chagrin a raconter ces souvenirs. il y a six ans deja que mon ami s en est alle avec son mouton. si j essaie ici de le decrire, c est afin de ne pas l oublier. c est triste d oublier un ami. tout le monde n a pas eu un ami. et je puis devenir comme les grandes personnes qui ne s interessent plus qu aux chiffres. c est donc pour ca encore que j ai achete une boite de couleurs et des crayons. c est dur de se remettre au dessin, a mon age, quand on n a jamais fait d autres tentatives que celle d un boa ferme et celle d un boa ouvert, a l age de six ans ! j essaierai, bien sur, de faire des portraits le plus ressemblants possible. mais je ne suis pas tout a fait certain de reussir. un dessin va, et l autre ne ressemble plus. je me trompe un peu aussi sur la taille. ici le petit prince est trop grand. la il est trop petit. j hesite aussi sur la couleur de son costume. alors je tatonne comme ci et comme ca, tant bien que mal. je me tromperai enfin sur certains details plus importants. mais ca, il faudra me le pardonner. mon ami ne donnait jamais d explications. il me croyait peut-etre semblable a lui. mais moi, malheureusement, je ne sais pas voir les moutons a travers les caisses. je suis peut-etre un peu comme les grandes personnes. j ai du vieillir.";
// le horla
const T11 = "d'ou viennent ces influences mysterieuses qui changent en decouragement notre bonheur et notre confiance en detresse. on dirait que l air, l air invisible est plein d inconnaissables puissances, dont nous subissons les voisinages mysterieux. je m eveille plein de gaite, avec des envies de chanter dans la gorge.--pourquoi?--je descends le long de l eau; et soudain, apres une courte promenade, je rentre desole, comme si quelque malheur m attendait chez moi.--pourquoi?--est-ce un frisson de froid qui, frolant ma peau, a ebranle mes nerfs et assombri mon ame? est-ce la forme des nuages, ou la couleur du jour, la couleur des choses, si variable, qui, passant par mes yeux, a trouble ma pensee? sait-on? tout ce qui nous entoure, tout ce que nous voyons sans le regarder, tout ce que nous frolons sans le connaitre, tout ce que nous touchons sans le palper, tout ce que nous rencontrons sans le distinguer, a sur nous, sur nos organes et, par eux, sur nos idees, sur notre coeur lui-meme, des effets rapides, surprenants et inexplicables?";
// albert camus
const T12 = "c’est un frolement qui m’a reveille. d’avoir ferme les yeux, la piece m’a paru encore plus eclatante de blancheur. devant moi, il n’y avait pas une ombre et chaque objet, chaque angle, toutes les courbes se dessinaient avec une purete blessante pour les yeux. c’est a ce moment que les amis de maman sont entres. ils etaient en tout une dizaine, et ils glissaient en silence dans cette lumiere aveuglante. ils se sont assis sans qu’aucune chaise grincat. je les voyais comme je n’ai jamais vu personne et pas un detail de leurs visages ou de leurs habits ne m’echappait. pourtant je ne les entendais pas et j’avais peine a croire a leur realite. presque toutes les femmes portaient un tablier et le cordon qui les serrait a la taille faisait encore ressortir leur ventre bombe. je n’avais encore jamais remarque a quel point les vieilles femmes pouvaient avoir du ventre. les hommes etaient presque tous tres maigres et tenaient des cannes. ce qui me frappait dans leurs visages, c’est que je ne voyais pas leurs yeux, mais seulement une lueur sans eclat au milieu d’un nid de rides. lorsqu’ils se sont assis, la plupart m’ont regarde et ont hoche la tete avec gene, les levres toutes mangees par leur bouche sans dents, sans que je puisse savoir s’ils me saluaient ou s’il s’agissait d’un tic. je crois plutot qu’ils me saluaient. c’est a ce moment que je me suis apercu qu’ils etaient tous assis en face de moi a dodeliner de la tete, autour du concierge. j’ai eu un moment l’impression ridicule qu’ils etaient la pour me juger";
// balzac
const T13 = "par une matinee pluvieuse, au mois de mars, un jeune homme, soigneusement enveloppe dans son manteau, se tenait sous l auvent de la boutique qui se trouvait en face de ce vieux logis, et paraissait l examiner avec un enthousiasme d archeologue. a la verite, ce debris de la bourgeoisie du seizieme siecle pouvait offrir a l observateur plus d un probleme a resoudre. chaque etage avait sa singularite. au premier, quatre fenetres longues, etroites, rapprochees l une de l autre, avaient des carreaux de bois dans leur partie inferieure, afin de produire ce jour douteux, a la faveur duquel un habile marchand prete aux etoffes la couleur souhaitee par ses chalands. le jeune homme semblait plein de dedain pour cette partie essentielle de la maison, ses yeux ne s y etaient pas encore arretes. les fenetres du second etage, dont les jalousies relevees laissaient voir, au travers de grands carreaux en verre de boheme, de petits rideaux de mousseline rousse, ne l interessaient pas davantage. son attention se portait particulierement au troisieme, sur d humbles croisees dont le bois travaille grossierement aurait merite d etre place au conservatoire des arts et metiers pour y indiquer les premiers efforts de la menuiserie francaise. ces croisees avaient de petites vitres d une couleur si verte, que, sans son excellente vue, le jeune homme n aurait pu apercevoir les rideaux de toile a carreaux bleus qui cachaient les mysteres de cet appartement aux yeux des profanes. parfois, cet observateur, ennuye de sa contemplation sans resultat, ou du silence dans lequel la maison etait ensevelie, ainsi que tout le quartier, abaissait ses regards vers les regions inferieures. un sourire involontaire se dessinait alors sur ses levres, quand il revoyait la boutique ou se rencontraient en effet des choses assez risibles."

const RANDOM_TAB_EASY = [T1,T2,T3,T4,T5,T9,T10,T11,T12,T13];

const T6 = "ce texte montre que  l attaque par frequence ne marche pas toujours si il n y a pas ou peu de e\nla ou nous vivions jadis il n y avait ni autos ni taxis ni autobus. nous allions parfois, mon cousin m accompagnait, voir linda qui habitait dans un canton voisin Mais, n ayant pas d autos, il nous fallait courir tout au long du parcours, sinon nous arrivions trop tard, linda avait disparu";
const T7 = "au coucher du soleil le ciel ni noir ni blanc, apparut. il fut apaisant mais rick a une mauvaise tete il a l air souffrant si au moins un ami arrivait au moins un dragon sympa, avec qui faire n importe quoi comme un texte difficilement dechiffrable un jour un pantin noir arriva dans sa maison au bord d un pont il y avait many l ours dans son salon mais il alla se coucher au matin on avait fait un constat il avait disparu sans savoir pourquoi sans motivation dans nul pays il n apparaissait plus";
const T8 = "rongeur futur alibi siphon himalaya sardine artiste radiant partie chou bouc taxis vomis sombrait bavoir savoir mordit ratios smart bord\nvoici une listes de mots aletoire sans aucun sens \n chiffon luzerne marginal pic sauvegarder radiographie puissance monocle gramme aucun motard tordis rotis";

const RANDOM_TAB_HARD = [T6,T7,T8];

/* Zone des Constantes et Définitions */

const DEFAULT_ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                          'n','o','p','q','r','s','t','u','v','w','x','y','z'];

const ALPHABET_SIZE = DEFAULT_ALPHABET.length;
const SPACE_CHAR = " ";

const BIGRAM_SIZE = 2;
const TRIGRAM_SIZE = 3;

let DICTIONARY = undefined;
let FREQUENCIES = undefined;
let lastCipherMethod = "";

let attaque_par_sami = false;

/* Declaration des Classes Outils */

class FreqAnalyser {
  constructor() {
    this.letters = [];
    this.bigram = [];
    this.trigram = [];
    this.duplicate = [];
  }
  setUp(text) {
    let words = text.split('\n');
    let fact_size = 0;
    for (let i = 0; i < words.length; ++i) {
      // check if words isn't an empty string
      if (words[i]) {
        if (words[i][0] == "=") {
          ++fact_size
        } else {
          let tmp = words[i].split(';');
          let fact = tmp[0];
          let value = parseFloat(tmp[1].replace(/[^0-9.-]+/g, ""));
          switch (fact_size) {
            case 1:
              this.letters.push({
                letter: fact,
                occur : value
              });
              break;
            case 2:
              this.bigram.push({
                letter: fact,
                occur : value
               });
               break;
            case 3:
              this.trigram.push({
                letter: fact,
                occur : value
              });
              break;
            case 4:
              this.duplicate.push({
                letter: fact,
                occur : value
              });
              break;
          }
        }
      }
    }
  }
}

// constructor
Trie = function() {
    this.words = 0;
    this.prefixes = 0;
    this.children = [];
};

Trie.prototype = {

    /*
    * Insert a word into the dictionary.
    */
    insert: function(str, pos) {
				// basic case
        if (str.length == 0) {
            return;
        }
				// error
        if (pos === undefined) {
            pos = 0;
        }
				// end
				var T = this;
				if (pos === str.length) {
            T.words++;
            return;
        }

        T.prefixes++;
        var k = str[pos];
				//if node for this char doesn't exist, create one
        if (T.children[k] === undefined) {
            T.children[k] = new Trie();
        }
        var child = T.children[k];
        child.insert(str, pos + 1);
    },

		/*
     * Count the number of times a given prefix was inserted in the dictionary
     */
		countWord: function(str, pos) {
        if (str.length == 0) {
            return 0;
        }
				// error
        if (pos === undefined) {
            pos = 0;
        }
				// end
				var T = this;
        if (pos === str.length) {
            return T.words;
        }
        var k = str[pos];
        var child = T.children[k];
				 //node exists
        var ret = 0;
				if (child !== undefined) {
					ret = child.countWord(str, pos + 1);
        }
        return ret;
    },

    /*
    * Find a word in the dictionary
		*/
    find: function(str) {
        if (str.length == 0) {
            return false;
        }

        if (this.countWord(str) > 0) {
            return true;
        } else {
            return false;
        }
    },
};

/* Fonctions Outils sur les chaines de caractères */

function round(number, nbOfDecimals) {
  let factor = Math.pow(10, nbOfDecimals);
  return Math.round(number * factor) / factor;
}

/**
 * Encrypt a text by replacing each character in text (writing with srcAlphabet)
 * by the character with the same index in destAlphabet.
 * srcAlphabet and destAlphabet are arrays and must have the same size.
 */
function encryptText(text, srcAlphabet, destAlphabet) {
  if (srcAlphabet.length != destAlphabet.length) {
    console.error("Error : different alphabet size");
    return;
  }
  var res = "";
  for (let i = 0; i < text.length; i++) {
    var index = srcAlphabet.indexOf(text[i]);
    if (index == -1) {
      res += text[i];
    } else {
      var c = destAlphabet[index];
      res += c;
    }
  }
	return res;
}

function formLetter(c) {
	if (c == "'") {
		return " ";
	}
  return c.normalize("NFKD").replace(/[\u0300-\u036F]/g, "").toLowerCase();
}

function textPretreatment(text) {
  var res = "";
  for (let i = 0; i < text.length; i++) {
    res += formLetter(text[i]);
  }
  return res;
}

function indexOfChar(char) {
  return DEFAULT_ALPHABET.indexOf(char.toLowerCase());
}

function replaceBy(text, l1, l2) {
	return text.replaceAll(l1, l2);
}

function isLower(c) {
  return 'a' <= c && c <= 'z';
}

function isUpper(c) {
  return 'A' <= c && c <= 'Z';
}

/**
 * Copy an array, shuffle and return him.
 */
function shuffleArray(array) {
  let a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isAllCaps(string) {
  for (let i = 0; i < string.length; ++i) {
    if (!isUpper(string[i])) {
      return false;
    }
  }
  return true;
}

String.prototype.strcmp = function(s) {
    if (this < s) return -1;
    if (this > s) return 1;
    return 0;
}

/*
 *	indexOfElemByProp : find the index of an element in the array which has a
 *		value of his property prop equal to value
 */
function indexOfElemByProp(array, prop, value) {
	for (let i = 0; i < array.length; ++i) {
		if (array[i][prop] == value) {
			return i;
		}
	}
	return -1;
}

/*
 * normalizedArray : browse the array 'array' and normalize it
 */
function normalizedArray(array, propName) {
	let sum = 0;
	for (let i = 0; i < array.length; ++i) {
		sum += array[i][propName];
	}
	let res = [];
	for (let i = 0; i < array.length; ++i) {
		let e = array[i];
		e[propName] = round(e[propName] * 100 / sum, 3);
		res.push(e);
	}
	return res;
}

function computeNbLetters(a, text) {
  var nb = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == a) {
      nb++;
    }
  }
  return nb;
}

function getLettersFreq(text) {
  var occurTab = [];
  for (let i = 0; i < DEFAULT_ALPHABET.length; i++) {
    occurTab[i] = computeNbLetters(DEFAULT_ALPHABET[i], text);
  }
  return occurTab;
}

/*
 * computeLettersFreq: return a sorted array with FREQUENCIES
 *		on all lower case char in the var text.
 */
function computeLettersFreq(text) {
  let array = [];
	// create a default alphabet with 0 occurences
	for (let i = 0; i < ALPHABET_SIZE; ++i) {
    array.push({letter: DEFAULT_ALPHABET[i], occur: 0});
  }

  let letters = 0;
  for (let i = 0; i < text.length; ++i) {
    if (text[i] != SPACE_CHAR) {
			// get the index of the current character
      let idx = indexOfChar(text[i]);
			if (idx != -1) {
        ++letters;
				// inc
        array[idx] = {letter: array[idx].letter, occur: array[idx].occur + 1};
      }
    }
	}
	// sort the array
  array = array.sort(function(x, y) {
   return y.occur - x.occur;
  });

	// round result
  for (let i = 0; i < array.length; ++i) {
    array[i].occur = round(array[i].occur / letters * 100, 3);
  }
  return array;
}


/* Chargement des fichiers au lancement de la page */

// load dictionary
fetch('dicos/liste_francais.txt')
  .then(response => response.text())
  .then(data => {
		let words = data.split("\n");
		DICTIONARY = new Trie();
		for (w of words) {
			DICTIONARY.insert(textPretreatment(w));
		}
	}
);

// loading FREQUENCIES file
fetch('freq.csv')
  .then(response => response.text())
  .then( data => {
    FREQUENCIES = new FreqAnalyser();
    FREQUENCIES.setUp(data);
		// normalized array ( see Notes )
		FREQUENCIES.bigram = normalizedArray(FREQUENCIES.bigram, "occur");
		FREQUENCIES.trigram = normalizedArray(FREQUENCIES.trigram, "occur");
  }
);


/*********************************************************************
 ***************          Partie Substitution         ****************
 *********************************************************************/

// retireve the cipher text, and compute the clear text equivalent
// using frequencies analysis ( doesn't work very well but thats
//	the point )
function substFreqSimpleSolver() {
	// use the already defined function
	// getFreqDiagramData and ask to sort by frequencies
	// // then convert it to a char array
	let data = getFreqDiagramData(true).map(x => x.letter);
	let cipherText = document.getElementById("cipher").value.slice();

	// replace letter
	for (let i = 0; i < data.length; ++i) {
		cipherText = replaceBy(cipherText, data[i], DEFAULT_ALPHABET[i].toUpperCase());
	}

	for (let i = 0; i < DEFAULT_ALPHABET.length; ++i) {
		cipherText = replaceBy(cipherText, DEFAULT_ALPHABET[i].toUpperCase(), DEFAULT_ALPHABET[i]);
	}

	document.getElementById("clear").value = cipherText;
  document.getElementById("freqtuto").style.display = "block";
}

/*
 * score : return a score based on the likely the alphabet decode the text
 * alpha ::= ["a", "c", "b"] which mean :
 *		cipher | clear
 *  ---------|--------
 *		    a -|-> a
 *		    b -|-> c
 *		    c -|-> b
 */
function score(alpha, text) {
	let sum = 0;
	for (e of FREQUENCIES.bigram) {
		let bigram = e.letter;
		let cipherBigram = alpha[indexOfChar(bigram[0])] + alpha[indexOfChar(bigram[1])];
		sum += (e.occur / 100) ** (text.split(cipherBigram).length);
	}
	return sum / FREQUENCIES.bigram.length;
}

function getNgramFromWord(string, n) {
	let size = string.length;
	let res = [];
	for (let i = 0; i < size - 1; ++i) {
		res.push(string.slice(i, i + n));
	}
	return res;
}

/*
 * scoreMarkov : return a score based on the likely the alphabet decode the text
 *	using markov chain
 * alpha ::= ["a", "c", "b"] which mean :
 *		cipher | clear
 *  ---------|--------
 *		    a -|-> a
 *		    b -|-> c
 *		    c -|-> b
 */
function scoreMarkov(alpha, text) {
	let sum = 1;
	let count = 0;
	let words = text.split(SPACE_CHAR);
	for (e of words) {
		let cipherBigrams = getNgramFromWord(e, BIGRAM_SIZE);
		count += cipherBigrams.length;
		for (b of cipherBigrams) {
			let idx = indexOfElemByProp(FREQUENCIES.bigram, "letter",
				alpha[indexOfChar(b[0])] + alpha[indexOfChar(b[1])]);
			if (idx != -1) {
				sum += FREQUENCIES.bigram[idx].occur;
			}
		}
	}
	// normalize array (add - to match ladder with the other score function )
	return - (sum / count);
}

/*
 *	permutation : permutate a and b in the alphabet alpha
 */
function permutation(alpha, a, b) {
	let idx1 = alpha.indexOf(a);
	let idx2 = DEFAULT_ALPHABET.indexOf(b);
	let tmp = alpha[idx1];
	let idx = alpha.indexOf(DEFAULT_ALPHABET[idx2]);
	alpha[idx1] = DEFAULT_ALPHABET[idx2];
	alpha[idx] = tmp;
}

/*
 * neighboor : return a neighboor of the alphabet alpha, the fonction will
 *		permuate a random element of the alphabet who didn"t appear in the
 *		static permutation.
 *		return a copy of alpha if there are no candidate, the newly created
 *		alphabet otherwise.
 */
function neighboor(alpha, staticPermutation) {
	let neighboor = alpha.slice();

	if (staticPermutation.length >= alpha.length) {
		return neighboor;
	}

	let rand1 = Math.ceil(Math.random() * 1000) % alpha.length;
	let rand2 = Math.ceil(Math.random() * 1000) % alpha.length;

	while (indexOfElemByProp(staticPermutation, "cipher", neighboor[rand1]) != -1
		  && indexOfElemByProp(staticPermutation, "clear", neighboor[rand2]) != -1
			&& indexOfElemByProp(staticPermutation, "cipher", neighboor[rand2]) != -1
			&& indexOfElemByProp(staticPermutation, "clear", neighboor[rand1]) != -1) {
			rand1 = Math.ceil(Math.random() * 1000) % alpha.length;
			rand2 = Math.ceil(Math.random() * 1000) % alpha.length;
		}

	permutation(neighboor, neighboor[rand1], neighboor[rand2]);

	return neighboor;
}

function solve(alpha, text, temp, nIter, staticPermutation, score) {

	// copy initial alphabet
	let curr = alpha.slice();
	let best = alpha.slice();

	// try to find the best solution in nIter iterations
	for (let i = 0; i < nIter; ++i) {
		// find the next candidate "near" to us
		let candidate = neighboor(curr, staticPermutation);

		// compute score of the candidate and the score of the best solution
		let s1 = score(candidate, text);
		let s2 = score(best, text);
		let s3 = score(curr, text);

		// if the score of the new candidate is better than the current node
		if (s1 < s2) {
			best = candidate;
		}

		// find difference between the score
		let delta = s1 - s3;
		// compute a critera to know if we keep the candidate as our current
		let critera = Math.exp(delta / temp);
		if (delta <= 0 || Math.random() > critera) {
			curr = candidate;
		}
		// reduce the temperature
		temp *= 0.99;
	}

	return best;
}

/*********************************************************************
 ***************              Partie Caesar           ****************
 *********************************************************************/

function decrypt_caesar(text,k){
  var res = "";
  for (let i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if ((c > 64 && c < 91)  ) {
      c -= k;
      if(c < 65 ){
         c += 26;
      }
    }
    if(c > 96 && c < 123){
      c -= k;
       if(c < 97){
         c += 26;
      }
    }
    var s = String.fromCharCode(c);
    res += s;
  }
  return res;
}

function crypt_caesar(text,k){
  var res = "";
  for (let i = 0; i < text.length; i++) {
    var c = text.charCodeAt(i);
    if ((c > 64 && c < 91)  ) {
      c += k;
      if(c > 90 ){
         c -= 26;
      }
    }
    if(c > 96 && c < 123){
      c += k;
       if(c > 122){
         c -= 26;
      }
    }
    var s = String.fromCharCode(c);
    res += s;
  }
  return res;
}

/*********************************************************************
 ***************                Outils                ****************
 *********************************************************************/

function computeNgram(n, text) {
	let words = text.split(SPACE_CHAR);
	let res = [];
	let N = n;
	let ngramNumber = 0;
	// for all the words
	for (let i = 0; i < words.length; ++i) {
		let curr = words[i];
		for (let j = 0; j < curr.length - N; ++j) {
			let ngram = curr.slice(j, j + N);
			let idx = indexOfElemByProp(res, "letter", ngram);
			++ngramNumber;
			if (idx == -1) {
				res.push({ letter : ngram, occur : 1});
			} else {
				res[idx].occur += 1;
			}
		}
	}

	res.map(e => e.occur /= ngramNumber);

	// sort the array
	res = res.sort(function(x, y) {
   return y.occur - x.occur;
  });

	// cut and normalized the arrays get the same norm between ngram and FREQUENCIES.ngram
	let refSize = n == 2 ? FREQUENCIES.bigram.length : FREQUENCIES.trigram.length;
	res = res.slice(0, refSize);
	normalizedArray(res, "occur");
	return res;
}

function Decrypt(temp, nIter, scoreFunc) {
  attaque_par_sami = true;
	let text = document.getElementById("cipher").value;
	let simple = computeLettersFreq(text);
	let bigram = normalizedArray(computeNgram(BIGRAM_SIZE, text), "occur");
	let alpha = DEFAULT_ALPHABET.slice();

	// small optimization to the algorithm
	let staticPermutation = [];
	permutation(alpha, simple[0].letter, FREQUENCIES.letters[0].letter);
	staticPermutation.push({cipher : simple[0].letter, clear : FREQUENCIES.letters[0].letter});

	let res = solve(alpha, text, temp, nIter, staticPermutation, scoreFunc);

	let tmpText = text.slice();
	for (let i = 0; i < res.length; ++i) {
		tmpText = replaceBy(tmpText, res[i], DEFAULT_ALPHABET[i].toUpperCase());
	}

	for (let i = 0; i < DEFAULT_ALPHABET.length; ++i) {
		tmpText = replaceBy(tmpText, DEFAULT_ALPHABET[i].toUpperCase(), DEFAULT_ALPHABET[i]);
	}

	document.getElementById("clear").value = tmpText;
  textChanged("clear");
  showSubstKey();
}

function computeCurrentKey() {
  let key = [];
  let cipherText = document.getElementById("cipher").value;
  let clearText = document.getElementById("clear").value;
  for (letter of DEFAULT_ALPHABET) {
    let idx = clearText.indexOf(letter);
    idx = (idx == -1) ? clearText.indexOf(letter.toUpperCase()) : idx;
    if (idx == -1) {
      key.push("*");
    } else {
      key.push(cipherText.charAt(idx));
    }
  }
  return key;
}

// Afficher l'alphabet
function showSubstKey() {
  alphabet = computeCurrentKey();
  displayTable(alphabet, "alphabet-subst");
}

//--- Partie Utilisateur -------------------------------------------------------

function isNumeric(num){
  num = "" + num; // coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num));
}

// Récupère le texte à chiffré, le chiffre et affiche le texte chiffré dans cipher
function cryptCaesarInput(text) {
  document.getElementById("chiff").innerHTML = "Chiffré par césar";
  lastCipherMethod = "Caesar";
  if (text == "") {
    alert("Veuillez entrez une clé valide");
    return;
  }
  // text
  let clearText = textPretreatment(document.getElementById("clear").value);
	let offset = 0;
  // check if offset is a number or a letter
  if (isNumeric(text)) {
    // a number
    offset = Math.abs(parseInt(text) % DEFAULT_ALPHABET.length);
  } else {
		if (DEFAULT_ALPHABET.indexOf(text) != -1) { // <- is letter
     	offset = Math.abs((text.charCodeAt(0) - DEFAULT_ALPHABET[0].charCodeAt(0)) % DEFAULT_ALPHABET.length);
    }
  }
	document.getElementById("cipher").value = crypt_caesar(clearText, offset);
  textChanged("cipher");
}

// chiffre par substitution le texte contenu dans la div d'id clear
function cryptSubstInput() {
  document.getElementById("chiff").innerHTML = "Chiffré par Subsitution";
  lastCipherMethod = "Subst";
  let alpha = document.getElementById("subst-alpha");
  let randomAb;
  // check if the user specified an alphabet
  if (alpha.value == "") {
    randomAb = shuffleArray(DEFAULT_ALPHABET);
  } else {
    randomAb = alpha.value.split("");
    const s = new Set(randomAb);
    // compare the size of array and Set
    console.log(randomAb.length);
    if(randomAb.length !== s.size || randomAb.length != DEFAULT_ALPHABET.length){
      // @TODO
      console.error("Warning: not an alphabet");
      return;
    }
    alpha.value = "";
  }
  displayTable(randomAb, "mytable");
  let clearText = textPretreatment(document.getElementById("clear").value);
  let cipherText = encryptText(clearText, DEFAULT_ALPHABET, randomAb);
  document.getElementById("cipher").value = cipherText;
  textChanged("cipher");
}

// ------------------------ Dessin du diagramme ----------------------------------

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX,endY);
  ctx.stroke();
  ctx.restore();
}

function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color, legend) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.font = "bold 14px Arial";
  ctx.fillText(legend, upperLeftCornerX + 10, upperLeftCornerY - 10);
  ctx.restore();
}

function drawRect(ctx, x, y, w, h, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
}

var Barchart = function(options) {
  this.options = options;
  this.canvas = options.canvas;
  this.ctx = this.canvas.getContext("2d");
  this.colors = options.colors;

  this.draw = function(scale) {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    var maxValue = 0;
    for (var categ in this.options.data) {
        maxValue = Math.max(maxValue, this.options.data[categ]);
    }
    var canvasActualHeight = this.canvas.height - this.options.padding * 2;
    var canvasActualWidth = this.canvas.width - this.options.padding * 2;

    // drawing background
    this.ctx.fillStyle = "#2B0334";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // drawing the grid lines
    var gridValue = 0;
    while (gridValue <= maxValue){
      var gridY = canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;
      drawLine(
        this.ctx,
        0,
        gridY,
        this.canvas.width,
        gridY,
        this.options.gridColor
      );

      //writing grid markers
      this.ctx.save();
      this.ctx.fillStyle = this.options.gridColor;
      this.ctx.textBaseline = "bottom";
      this.ctx.font = "bold 10px Arial";
      this.ctx.fillText(gridValue, 1, gridY - 2);
      this.ctx.restore();

      gridValue += this.options.gridScale;
    }

    // drawing the bars
    var barIndex = 0;
    var numberOfBars = Object.keys(this.options.data).length;
    var barSize = (canvasActualWidth) / numberOfBars;

    for (categ in this.options.data) {
      var val = this.options.data[categ];
      var barHeight = Math.round((canvasActualHeight * val / maxValue) * scale);
      drawBar(
        this.ctx,
        this.options.padding + barIndex * barSize,
        this.canvas.height - barHeight - this.options.padding,
        barSize / 2,
        barHeight,
        this.colors[barIndex % this.colors.length],
        this.options.legend[barIndex]
      );
      barIndex++;
    }

    // drawing series name
    this.ctx.save();
    this.ctx.textBaseline = "bottom";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "white";
    this.ctx.font = "bold 14px Arial";
    this.ctx.fillText(this.options.seriesName, this.canvas.width / 2,this.canvas.height);
    this.ctx.restore();
  }
}

function sleep(milliseconds) {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function progressDraw(i, chart) {
  while (i < 1.0) {
    chart.draw(i);
    await sleep(15);
    i += 0.01;
  }
}

function getFreqDiagramData(sorted) {
  let rawData = document.getElementById('cipher').value;
  let freq = getLettersFreq(rawData);
  let data = [];
  for (let i = 0; i < DEFAULT_ALPHABET.length; i++) {
    data.push({ letter : DEFAULT_ALPHABET[i], freq : freq[i] });
  }
  if (sorted) {
    data = data.sort((x,y) => y.freq - x.freq);
  }
  return data;
}

function getScale(freqs) {
  let scale = round(Math.max.apply(null, freqs) / 10, -1);
  return scale == 0 ? 5 : scale;
}

// Affiche le diagramme des frequences pour César ou la substitution
//  --> id vaut 'caesar' ou 'sub' selon le cas
// ex de data : [{letter : "a", freq : 5}, {letter : "b", freq : 7}];
function showFreqDiagram(id, data) {
  let myCanvas = document.getElementById(id + "Canvas");
  myCanvas.width = 1000;
  myCanvas.height = 300;
  // cooldown for buttons
  let button = document.getElementById(id + "DiagramBtn");
  let sortedButton = document.getElementById(id + "DiagramBtnSorted");
  button.disabled = true;
  sortedButton.disabled = true;
  setTimeout(function() {
    button.disabled = false;
    sortedButton.disabled = false;
  }, 2000);
  // animated draw
  progressDraw(0.01, new Barchart({
        canvas: myCanvas,
        seriesName: "Analyse par fréquence du texte chiffré",
        padding: 20,
        gridScale: getScale(data.map(x => x.freq)),
        gridColor:"#FFFFFF",
        data: data.map(x => x.freq),
        legend: data.map(x => x.letter),
        colors:["#ff0072","#bb0370","#9b046f","#4b076d","#560753","#600739","#6d071a"]
    })
  );
}

function drawBigramTable(canvas, data, options) {
	canvas.style.background = options.backgroundColor;
	let ctx = canvas.getContext("2d");

	// get the size
	let max = Math.exp(data[0].occur);
	let offset = 40;
	let xsize = (canvas.width - offset) / DEFAULT_ALPHABET.length;
	let ysize = (canvas.height - offset) / DEFAULT_ALPHABET.length;

	// draw rect based on the bigram and their frequencies
	for (e of data) {
		let bigram = e.letter;
		let x = indexOfChar(bigram[1]);
		let y = indexOfChar(bigram[0]);
		let value = Math.floor((e.occur * 255) / max);

		let r = value / ((255 - options.red) / 255);
		let g = value / ((255 - options.green) / 255);
		let b = value / ((255 - options.blue) / 255);

		let color = "rgb(" + r + "," + g + "," + b + ")";

		// check if the value isn't interesting -> set the color of the node to backgroundColor
		if (r >= 250 && g >= 250 && b >= 250) {
			color = options.backgroundColor;
		}

		// check if the color is very interesting
		if (r <= 10 && g <= 10 && b <= 10) {
			value = 10;

			r = value / ((255 - options.red) / 255);
			g = value / ((255 - options.green) / 255);
			b = value / ((255 - options.blue) / 255);

			color = "rgb(" + r + "," + g + "," + b + ")";
		}

		drawRect(ctx,
			offset / 2 + x * xsize,
			offset / 2 + y * ysize,
			xsize, ysize,
			color
		);
	}

	// draw legend on x axis + bar
	for (let i = 0; i < DEFAULT_ALPHABET.length; ++i) {
		ctx.fillStyle = options.textColor;
		ctx.fillText(DEFAULT_ALPHABET[i], offset / 2 + i * xsize + xsize / 2, offset / 3);
		ctx.fillStyle = options.lineColor;
		ctx.fillRect(offset / 2 + i * xsize, offset / 2, 1, offset / 2 + (DEFAULT_ALPHABET.length - 1) * ysize);
	}
	// draw the last bar
	ctx.fillRect(offset / 2 + DEFAULT_ALPHABET.length * xsize, offset / 2, 1, offset / 2 + (DEFAULT_ALPHABET.length - 1) * ysize);

	// draw legend on y axis + bar
	for (let i = 0; i < DEFAULT_ALPHABET.length; ++i) {
		ctx.fillStyle = options.textColor;
		ctx.fillText(DEFAULT_ALPHABET[i], offset / 4, offset / 2 + i * ysize + ysize / 2);
		ctx.fillStyle = options.lineColor;
		ctx.fillRect(offset / 2, offset / 2 + i * ysize, offset / 2 + (DEFAULT_ALPHABET.length - 1) * xsize, 1);
	}
	// draw the last bar
	ctx.fillRect(offset / 2, offset / 2 + DEFAULT_ALPHABET.length * ysize, offset / 2 + (DEFAULT_ALPHABET.length - 1) * xsize, 1);
}

function SubstDrawBigramTable() {
	let div = document.getElementById("BigramTable");
	let data = computeNgram(BIGRAM_SIZE, document.getElementById("cipher").value);
	let options = {
		textColor : "#E6E2E2",
		lineColor : "#E6E2E2",
		backgroundColor : "#42455a",
		red : 250,
		green : 0,
		blue : 171
	};

	// check if it's the first time
	if (div.children.length == 1 && document.getElementById("BigramTable").children[0].type == "button") {
		// add table
		let canvas = document.createElement("canvas");
		canvas.height = "500";
		canvas.width  = "500";
		canvas.style  = "border: 1px solid #d3d3d3;"
		canvas.id			= "CipherBigramTable";

		drawBigramTable(canvas, data, options);
		div.appendChild(canvas);
	} else {
		// change div
		let canvas = document.getElementById("CipherBigramTable");
		drawBigramTable(canvas, data, options);
		div.appendChild(canvas);
	}

  var cipherBigramTable = document.getElementById("CipherBigramTable");
  cipherBigramTable.style.display = "initial";
}

// ----------------------  pages / boutons / block none -----------------------

function showDiv(){
  document.getElementById("mots").style.display = "none";
  document.getElementById("bigram").style.display = "none";
  document.getElementById("auto").style.display = "none";
  document.getElementById("freq").style.display = "none";
  document.getElementById("freq2").style.display = "none";
  document.getElementById('brute').style.display = "none";
  document.getElementById("freqtuto").style.display = "none";
  var choice = document.getElementById('textType').selectedIndex;
  let menu = document.getElementById('menu-nav');

	// Go Back
  if (menu.style.display == 'block') {
    attaque_par_sami = false;
    document.getElementById('cipherDiv').style.display = "none";
    document.getElementById('clearDiv').style.display = "none";
    document.getElementById('clearsubDiv').style.display = "none";
    document.getElementById('banner').style.display = "block";
  } else {
		// GO
    // choice == 2																																-> clear
    // choice == 1 && document.getElementById('CipherMethod').selectedIndex == 1 -> subst
    // choice == 1 && document.getElementById('CipherMethod').selectedIndex == 2 -> caesar
    document.getElementById('banner').style.display = "none";
    if (choice == 2) {
      document.getElementById('cipherDiv').style.display = "block";
      document.getElementById('clearDiv').style.display = "none";
      document.getElementById('clearsubDiv').style.display = "none";
    } else if (choice == 1) {
	    var cipherMethod = document.getElementById('CipherMethod').selectedIndex;
      if (cipherMethod == 1) { // -> subst
        lastCipherMethod = "Subst";
        document.getElementById('clearDiv').style.display = "none";
        document.getElementById('cipherDiv').style.display = "none";
        document.getElementById('clearsubDiv').style.display = "block";
        // menu haut droit
        document.getElementById("mots").style.display = "none";
        document.getElementById("bigram").style.display = "block";
        document.getElementById("auto").style.display = "block";
        document.getElementById("freq").style.display = "block";
        document.getElementById("freq2").style.display = "none";
        document.getElementById('brute').style.display = "block";
      } else { // -> caesar
        lastCipherMethod = "Caesar";
        document.getElementById('clearDiv').style.display = "block";
        document.getElementById('cipherDiv').style.display = "none";
        document.getElementById('clearsubDiv').style.display = "none";
        // menu haut droit
        document.getElementById("mots").style.display = "block";
        document.getElementById("bigram").style.display = "none";
        document.getElementById("auto").style.display = "none";
        document.getElementById("freq2").style.display = "block";
        document.getElementById("freq").style.display = "none";
        document.getElementById('brute').style.display = "block";
      }
    }
  }
}

function showselect() {
  document.getElementById("TextInput").value = "";
  document.getElementById('gob').disabled = true;
  let textType = document.getElementById('textType');
  let ciphermethode = document.getElementById('CipherMethod');
  // si rien
  if (textType.value == -1) {
    return;
  } else if (textType.value == 0) {   // si chiffré
    ciphermethode.style.display = 'block';
    if (ciphermethode.value == -1) {    // si pas de méthode de chifrrement
      return;
    } else if (ciphermethode.value == 0) {  // si méthode = sub
      var div = document.getElementById('warning');
      div.style.display = 'block';
    } else if (ciphermethode == 1) {    // si méthode = cesar
      var div = document.getElementById('warning');
      div.style.display = 'none';
    }
    document.getElementById('talea').disabled = false;
    document.getElementById('gob').disabled = false;
  } else if (textType.value == 1) {   // si non chiffré
    ciphermethode.style.display = 'none';
    var div = document.getElementById('warning');
    div.style.display = 'none';
    document.getElementById('talea').disabled = false;
    document.getElementById('gob').disabled = false;
  }
}

// ------------------------------- Go back / Go -------------------------

function TransformMenu() {
  // annule l'intervalle force brute
  clearForceBrute();
  clearHist();

  // body
	let menu = document.getElementById('menu-nav');
	let selected = document.getElementById('textType');

	menu.style.display = menu.style.display == 'none' ? 'block' : 'none';
	let menuText = document.getElementById('menu-text');
	menuText.style.display = menuText.style.display	== 'none' || menuText.style.display == "" ? 'block' : 'none';

  if (selected.value == 0) {
    if (document.getElementById('CipherMethod').value == 0) {
      lastCipherMethod = "Subst";
      document.getElementById("chiff").innerHTML = "Chiffré par Subsitution";
    } else if (document.getElementById('CipherMethod').value == 1) {
      lastCipherMethod = "Caesar";
      document.getElementById("chiff").innerHTML = "Chiffré par César";
    } else {
      document.getElementById("chiff").innerHTML = "Chiffré";
    }
  }

  iniText();
  showDiv();
  deleteTable();
}

// ----------------------- generation de texte aleatoire random ---------------------

function randomTextDifficulty(tab) {
  let textType = document.getElementById('textType').value;
  let cipherMethod = document.getElementById('CipherMethod').value;
  let randomint = Math.floor(Math.random() * tab.length);
  if (textType == 1) {
    document.getElementById("TextInput").value = tab[randomint];
  } else if (textType == 0) {
    if (cipherMethod == 0) {
      let randomAb = shuffleArray(DEFAULT_ALPHABET);
      let cipherText = encryptText(tab[randomint], DEFAULT_ALPHABET, randomAb);
	    document.getElementById("TextInput").value = cipherText;
    } else {
      let randomces = Math.floor(Math.random() * Math.floor(26));
      document.getElementById("TextInput").value = crypt_caesar(tab[randomint], randomces);
    }
  }
}

function randomtextEasy() {
	randomTextDifficulty(RANDOM_TAB_EASY);
}

function randomtextHard() {
	randomTextDifficulty(RANDOM_TAB_HARD);
}

//-------------------------- Remplacement --------------------------------------

function checkLetters(oldLetters, newLetters) {
  // different sizes
  if (oldLetters.length != newLetters.length) {
    return false;
  }
  // check if all letters are differents
  for (let i = 0; i < oldLetters.length; i++) {
    if (oldLetters[i].toLowerCase() == newLetters[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

function doReplacement(oldLetters, newLetters, targetName, otherName) {
  if (!checkLetters(oldLetters, newLetters)) {
    alert("Remplacement impossible !");
    return;
  }
  target = document.getElementById(targetName);
  other = document.getElementById(otherName);
  // texte chiffré vide
  if (target.value == "") {
    target.value = textPretreatment(other.value);
    textChanged(targetName);
  }
  for (let i = 0; i < oldLetters.length; i++) {
    let oldL = oldLetters[i].toLowerCase();
    let newL = newLetters[i].toUpperCase();
    // pour éviter de faire par exemple : e -> A, puis s -> A
    if (!target.value.includes(newL)) {
      // pour pouvoir faire : e -> A puis e -> S sans go back
      if (!target.value.includes(oldL)) {
        let majLetter = target.value.charAt(other.value.indexOf(oldL))
        if (majLetter != "") {
          target.value = target.value.replaceAll(majLetter, newL);
        }
      } else {
        target.value = target.value.replaceAll(oldL, newL);
      }
    }
  }
  textChanged(targetName);
}

function clearReplacement(oldLetters, newLetters) {
  doReplacement(oldLetters, newLetters, "cipher", "clear");
}

function substReplacement(oldLetters, newLetters) {
  doReplacement(oldLetters, newLetters, "clear", "cipher");
}

function cesarReplacement(oldLetters, newLetters) {
  if (oldLetters.length != 1 || newLetters.length != 1) {
    alert("Remplacement impossible !");
    return;
  }
  let encryptedText = document.getElementById("cipher").value;
  let codeOld = oldLetters.charCodeAt(0);
  let codeNew = newLetters.charCodeAt(0);
  let decalage;
  if (codeOld < codeNew) {
    decalage = 26 - (codeNew - codeOld);
  } else {
    decalage = Math.abs(codeNew - codeOld);
  }
  document.getElementById("keyAuto3").value = decalage;
  apparition(decrypt_caesar(encryptedText, decalage), "clear");
}

function askReplacement(oldLetters, newLetters) {
  if (attaque_par_sami) {
    alert("Attenion pour simplifier le remplacement, celui-ci se fera depuis le texte clair vers le texte clair");
    attaque_par_sami = false;
  }
  isCipher = document.getElementById("textType").value == 0 ? true : false;
  if (!isCipher) {
    clearReplacement(oldLetters, newLetters);
  } else {
    isSub = document.getElementById("CipherMethod").value == 0 ? true : false;
    if (isSub) {
      substReplacement(oldLetters, newLetters);
    } else {
      cesarReplacement(oldLetters, newLetters);
    }
  }
}

//--- Undo - Redo --------------------------------------------------------------

var previousTexts = [];
var currentText;
var nextTexts = [];

function textChanged(id) {
  var newText = document.getElementById(id).value;
  if (currentText !== undefined && newText != currentText) {
    previousTexts.push({ id: id, text: currentText });
  }
  currentText = newText;
}

function undo() {
  if (previousTexts.length > 0) {
    var prev = previousTexts.pop();
    nextTexts.push({ id: prev.id, text: currentText });
    document.getElementById(prev.id).value = prev.text;
    currentText = prev.text;
  }
}

function redo() {
  if (nextTexts.length > 0) {
    var next = nextTexts.pop();
    previousTexts.push({ id: next.id, text: currentText });
    document.getElementById(next.id).value = next.text;
    currentText = next.text;
  }
}

function clearHist() {
  currentText = undefined;
  previousTexts = [];
  nextTexts = [];
}

//--------------------------- déchiffrement de cesar ---------------------------

// Récupère le texte chiffré, le déchiffre en fonction de la clé donnée et
// affiche le text déchiffre dans clear
function decryptCesarInputWithKey() {
  let cipherText = textPretreatment(document.getElementById("cipher").value);

  var key = document.getElementById("Key").selectedIndex;
  if (key == 26){
    key = getRandomInt(25);
  }

  apparition(decrypt_caesar(cipherText,key), "clear");
}

async function apparition(text, out){
  for (let i = 0; i <= text.length; i += 2) {
    document.getElementById(out).value = melanger(text, i);
    await sleep(1);
  }
  document.getElementById(out).value = text;
  textChanged(out);
}

function melanger(text, pos){
  let text2 = text.slice(0, pos);
  for (let i = pos; i < text.length ; i++) {
    let c = text.charCodeAt(i);
    if ((c > 64 && c < 91) || (c > 96 && c < 123)) {
      text2 += DEFAULT_ALPHABET[getRandomInt(26)];
    } else {
      text2 += text[i];
    }
  }
	return text2;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var interval = null;

function demonstrationForceBrute() {
  if (interval != null) {
    clearInterval(interval);
  }
  let encryptedText = document.getElementById("cipher").value;
  let i = 1;
  interval = setInterval(function() {
    if (i == 27) {
      clearForceBrute();
      decryptAutomaticCesar();
      return;
    }
    document.getElementById("demonstration").value = decrypt_caesar(encryptedText, i);
    document.getElementById("demonstrationKey").value = i;
    i++;
  }, 700);
}

function clearForceBrute(){
  document.getElementById("demonstration").value = "";
  document.getElementById("demonstrationKey").value = "";
  clearInterval(interval);
}

function decryptAutomaticCesar() {
  var encryptedText = document.getElementById("cipher").value;
  if (encryptedText == "") {
     alert("Aucun texte");
  } else {
    var maxI = 1;
    var maxPourc = 0;
    for (let i = 1; i < 26; i++) {
      var p = analyseTextCesar(decrypt_caesar(encryptedText,i));
      if (p > maxPourc) {
        maxPourc = p;
        maxI = i;
      }
    }
    apparition(decrypt_caesar(encryptedText,maxI),"clear");
    document.getElementById("keyAuto3").value = maxI;
  }
}

function analyseTextCesar(text){
  let nbmot = 0;
  let trouve = 0;
  let tab = text.split(SPACE_CHAR);
  for (let i = 0; i < tab.length; i++) {
    if (DICTIONARY.find(tab[i])) {
      trouve++;
    }
    nbmot++;
  }
  return (trouve * 100 / nbmot);
}

function decryptFreqCesar()  {
  let encryptedText = document.getElementById("cipher").value;
  let letter = document.getElementById("KeyFreq").value;
  if (letter == "" || letter.length > 1) {
    alert("Mauvaise clé");
  }
  let codeE = "e".charCodeAt(0);
  let codeDec = letter.charCodeAt(0);
  let decalage = codeDec - codeE;
  decalage = decalage < 0 ? DEFAULT_ALPHABET.length + decalage : decalage;
  apparition(decrypt_caesar(encryptedText, decalage), "clear");
}

function probableCesar() {
  let text = document.getElementById("cipher").value;
  let mot = document.getElementById("motProbable").value;
  let tab = text.split(SPACE_CHAR);

  for (let i = 0; i < tab.length; i++) {
    if (tab[i].length == mot.length) {
      let oldKey = tab[i].charCodeAt(0) - mot.charCodeAt(0);
      if (oldKey < 0) {
        oldKey = 26 + oldKey;
      }
      let key = oldKey;
      for (let u = 1; u < tab[i].length && key == oldKey; u ++) {
        key = tab[i].charCodeAt(u) - mot.charCodeAt(u);
        if (key < 0) {
          key = 26 + key;
        }
      }
      if (key == oldKey) {
        let clearText = decrypt_caesar(text, key);
        apparition(clearText, "clear");
        return;
      }
    }
  }
  alert("Le mot probable n'est pas dans le texte");
}

// ----------------- outils ---------------------------

function deleteTable() {
  document.getElementById("res-subst").innerHTML = "";
  document.getElementById("mytable").innerText = "";
  document.getElementById("mytable2").innerText = "";
}

function iniText() {
  let text = document.getElementById("TextInput").value;
  let select = document.getElementById('textType').value;
  if (select == 0) {
    document.getElementById("cipher").value = text;
    document.getElementById("clear").value = "";
  } else if (select == 1){
    document.getElementById("clear").value = text;
    document.getElementById("cipher").value = "";
  }
}

function displayTable(randomAb, id) {
  let body = document.getElementById(id);
  if (body.innerText != "") {
    body.innerText = "";
  }
  let tblBody = document.createElement("tbody");

  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Alphabet clair");
  cell.appendChild(cellText);
  row.appendChild(cell);
  for (let j = 0; j < randomAb.length; j++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(DEFAULT_ALPHABET[j]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  tblBody.appendChild(row);

  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var cellText = document.createTextNode("Alphabet de substitution");
  cell.appendChild(cellText);
  row.appendChild(cell);
  for (let j = 0; j < randomAb.length; j++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(randomAb[j]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  tblBody.appendChild(row);
  body.appendChild(tblBody);
  body.setAttribute("border", "2");
}


/*
 * When the user clicks on the button, toggle
 * between hiding and showing the dropdown content
 */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function info() {
  if (document.getElementById('banner').style.display == "none") {
    document.getElementById('banner').style.display = "block";
    document.getElementById('apropos').style.display = "none";
  } else {
    document.getElementById('banner').style.display = "none";
    document.getElementById('apropos').style.display = "block";
  }
}

function clearTextArea() {
  document.getElementById("demonstration").value = "";
  document.getElementById("demonstrationKey").value = "";
  document.getElementById("keyAuto").value = "";
  document.getElementById("KeyFreq").value = "";
  document.getElementById("motProbable").value = "";

  document.getElementById("input").value = "";
  document.getElementById("subst-alpha").value = "";

  document.getElementById("SubstNbIter").value = "";
  document.getElementById("SubstTemperature").value = "";
  document.getElementById("KeyFreqSub").value = "";
}

function clearDiagrammes() {
  var caesarCanvas = document.getElementById("caesarCanvas");
  caesarCanvas.width = 1000;
  caesarCanvas.height = 300;
  var subCanvas = document.getElementById("subCanvas");
  subCanvas.width = 1000;
  subCanvas.height = 300;
  if (document.getElementById("CipherBigramTable") != null) {
    document.getElementById("CipherBigramTable").style.display = "none";
  }
}

function clearConsole() {
  document.getElementById("cipher").value = "";
  document.getElementById("clear").value = "";
  document.getElementById("oldLetters").value = "";
  document.getElementById("newLetters").value = "";
}

function clearAll() {
  clearTextArea();
  clearDiagrammes();
  clearForceBrute();
  clearHist();
  clearConsole();
  deleteTable();
}

// ----------------- lien chiffrement - attaque ---------------------------

function goAttaque() {
	// change selected option in control panel to remember which
	// textarea need to be modified by askReplacement()
  let textType = document.getElementById('textType');
  textType.value = 0;

  document.getElementById("clear").value = "";
  clearForceBrute();
  deleteTable();

  document.getElementById('clearDiv').style.display = "none";
  document.getElementById('cipherDiv').style.display = "none";
  // check what was the last cipher method
  if (lastCipherMethod.strcmp("Caesar") == 0) {
    document.getElementById('clearDiv').style.display = "block";
    document.getElementById("mots").style.display = "block";
    document.getElementById("bigram").style.display = "none";
    document.getElementById("auto").style.display = "none";
    document.getElementById("freq2").style.display = "block";
    document.getElementById("freq").style.display = "none";
    document.getElementById('brute').style.display = "block";
    document.getElementById("CipherMethod").value = 1;
  } else if (lastCipherMethod.strcmp("Subst") == 0) {
    document.getElementById('clearsubDiv').style.display = "block";
    document.getElementById("mots").style.display = "none";
    document.getElementById("bigram").style.display = "block";
    document.getElementById("auto").style.display = "block";
    document.getElementById("freq").style.display = "block";
    document.getElementById("freq2").style.display = "none";
    document.getElementById('brute').style.display = "block";
    document.getElementById("CipherMethod").value = 0;
  } else {
		alert("Vous devez selectionner une méthode de chiffrement");
   	document.getElementById('clearsubDiv').style.display = "block";
  }
}
