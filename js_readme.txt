Introduction JS

Its one of the programming language, other language - C, B, Fortan, Java, C#, Ruby, Python, PHP, Perl, R Programming, Scala,….

C - Mid level Programming Language (1970)

#include<stdio.h>
main(){ 
…
…
printGraphs();
…
}

printGraphs(){
…
..
}

Java, Ruby, Python, JavaScript - Object Oriented programming (High level) (1992 - OOPS)

Class Graph {
	print(){

	}

	draw() {
	}
}

Class Machine(){
	run() {
		g = new Graph()
		g.print()
	}

}

JavaScript is also called functional programming Language 

function graph(){
	return {
		print: print(){
			return this.data;
		},
		draw: draw(data){
			return this.data = data;
		}
	}
}

function machine(){
	run(graph){
		graph.print();
	}
}


What we do this JS?
- Browser level JS ( completely depends on browser html/css )
- System level JS (nodejs - server side, cli, desktop, mobile )