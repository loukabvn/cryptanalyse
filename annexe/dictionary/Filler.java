package dico;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.Normalizer;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

public class Filler implements DicoUtils {
	
	// Attributs
	
	private File dico;
	private File[] texts;
	
	private TreeMap<String, Set<String>> wordsOccur;
	
	// Constructeurs
	
	public Filler() {
		this.dico = new File(DICO_DIR + DICO_NAME);
		File dir = new File(TEXTS_DIR);
		this.texts = dir.listFiles();
		wordsOccur = new TreeMap<String, Set<String>>();
	}
	
	// Requetes
	
	public TreeMap<String, Set<String>> getWords() {
		return wordsOccur;
	}
	
	// Commandes
	
	public void initDico() throws IOException {
		BufferedReader reader = new BufferedReader(new FileReader(dico));
		String line;
		while ((line = reader.readLine()) != null && !line.equals("")) {
			addInList(form(line), dico.getName());
		}
		reader.close();
	}
	
	public void fillMap() throws IOException {
		for (File text : texts) {
			BufferedReader reader = new BufferedReader(new FileReader(text));
			String line;
			while ((line = reader.readLine()) != null) {
				String[] t = line.split("\\W|\\d|_");
				for (String str : t) {
					if (!ROMAN_NB.matcher(str).matches() && !str.equals("")) {
						addInList(form(str), text.getName());
					}
				}
			}
			reader.close();
		}
	}
	
	public void writeNewDico() throws IOException {
		File output = new File(DICO_DIR + OUTPUT_DICO);
		BufferedWriter writer = new BufferedWriter(new FileWriter(output));
		
		for (String word : wordsOccur.keySet()) {
			// printElem(word);
			Set<String> occur = wordsOccur.get(word);
			if (occur != null && occur.size() >= THRESOLD) {
				writer.write(word);
				writer.newLine();
			}
		}
		writer.close();
	}
	
	// Outils
	
	private String form(String s) {
		return Normalizer.normalize(s, Normalizer.Form.NFKD)
				.replaceAll("[^\\p{ASCII}]", "").toLowerCase();
	}
	
	private void addInList(String word, String filename) {
		Set<String> lst;
		if (wordsOccur.containsKey(word)) {
			lst = wordsOccur.get(word);
		} else {
			lst = new TreeSet<String>();
		}
		lst.add(filename);
		wordsOccur.put(word, lst);
	}
	
	private void printElem(String word) {
		StringBuilder r = new StringBuilder(word + "\t\t");
		for (String s : wordsOccur.get(word)) {
			r.append(s + "\t");
		}
		System.out.println(r);
	}
	
	// Point d'entrée
	
	public static void main(String args[]) throws IOException {
		Filler f = new Filler();
		
		f.initDico();		
		f.fillMap();
		f.writeNewDico();
	}
}
	


