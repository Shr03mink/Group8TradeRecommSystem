package com.springjwt.models;
import javax.persistence.*;

import org.springframework.beans.factory.annotation.Autowired;
import com.springjwt.controllers.AuthController;

@Entity
@Table(name = "companies")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long company_id;


	@Column(name = "symbol")
	private String symbol;

	/*@Column(name = "published")
	private boolean published;
	*/
	
	@Column(name = "open")
	private double open;
	
	@Column(name = "previous_closed")
	private double previous_closed;
	
	@Column(name = "day_low")
	private double day_low;
	
	@Column(name = "day_high")
	private double day_high;
	
	@Column(name = "perc_change")
	private double perc_change;
	
	@Column(name= "username")
	private String username;
	

	
	public Company() {
		
	}

	
	public Company(String symbol, double open, double previous_closed,double day_low, double day_high,double perc_change, String username) {
		//this.c_name = name;
		this.symbol = symbol;
		//this.published = published;
		this.open=open;
		this.previous_closed=previous_closed;
		this.day_low=day_low;
		this.day_high=day_high;
		this.perc_change=perc_change;
		this.username = username;
	}
	
	public long getCompId() {
		return company_id;
	}

	/*public String getc_name() {
		return c_name;
	}

	public void setc_name(String c_name) {
		this.c_name = c_name;
	}*/

	public String getsymbol() {
		return symbol;
	}

	public void setsymbol(String symbol) {
		this.symbol = symbol;
	}

	public double getOpen() {
		return open;
	}


	public void setOpen(double open) {
		this.open = open;
	}


	public double getPrevious_closed() {
		return previous_closed;
	}


	public void setPrevious_closed(double previous_closed) {
		this.previous_closed = previous_closed;
	}


	public double getDay_low() {
		return day_low;
	}


	public void setDay_low(double day_low) {
		this.day_low = day_low;
	}


	public double getDay_high() {
		return day_high;
	}


	public void setDay_high(double day_high) {
		this.day_high = day_high;
	}


	public double getPerc_change() {
		return perc_change;
	}


	public void setPerc_change(double perc_change) {
		this.perc_change = perc_change;
	}


	@Override
	public String toString() {
		return "Tutorial [id=" + company_id + ", symbol=" + symbol + ", open="+open +", previous_closed="+previous_closed+", day_low="+day_low+", day_high= "+day_high+", perc_change="+perc_change+"]";
	}

}
