/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.server.thea;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@Controller
public class HomeController {

	@RequestMapping(value = "/")
	public String index(HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		return "index";
	}
	
	@RequestMapping(value = "/restApi/employees")
	public List<Employee> getEmployees(HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		List<Employee> employees = new ArrayList<Employee>();
		Employee employeeA = new Employee("a", "b", "c");
		Employee employeeB = new Employee("b", "b", "c");
		Employee employeeC = new Employee("c", "b", "c");
		employees.add(employeeA);
		employees.add(employeeB);
		employees.add(employeeC);
		return employees;
	}

}
// end::code[]