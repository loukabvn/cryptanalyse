package dico;

import java.util.regex.Pattern;

public interface DicoUtils {
	
	/* Thresold */
	Integer THRESOLD = 2;

	/* Absolute path names for files */
	String DICO_DIR = "/home/louka/Java/Crypto/dictionary/";
	
	String TEXTS_DIR = "/home/louka/Java/Crypto/texts/";
	
	/* Name of the initial dictionary */
	String DICO_NAME = "liste_francais.txt";
	
	/* Name of the output */
	String OUTPUT_DICO = "dictionnaire_francais_v2.txt";
	
	/* Regexp for roman numbers (XVII, VIème, ...) */
	Pattern ROMAN_NB =  Pattern.compile("([IVX]|[IVXLDCM]{2,})[er|eme|ème|e]?");
}
