package com.example.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "hector", "learn to code", new Date(), false));
		todos.add(new Todo(++idCounter, "hector", "learn to cook", new Date(), false));
		todos.add(new Todo(++idCounter, "hector", "learn to draw", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
