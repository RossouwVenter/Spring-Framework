package com.example.demo.Todo;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

public class TodoHardCodedService {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter,"in28minutes","Learn to dance", new Date(),false));
		todos.add(new Todo(++idCounter,"in28minutes","Learn about Microservices", new Date(),false));
		todos.add(new Todo(++idCounter,"in28minutes","Learn about Angular", new Date(),false));

		
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
