package com.swhizz.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "profile")
public class User {

          @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long userid;

	    @Column(name="username")
	    private String username;

	    @Column(name="password")
	    private String password;
	    
	    @Column(name="cpassword")
	    private String cpassword;
	    
	   
	  
	    
	    
	    @Column(name="email")
	    private String email;
	    
	    
	    @Column(name="mobilenumber")
	    private String mobilenumber;
	    
	    @Column(name="location")
	    private String location;


		public Long getUserid() {
			return userid;
		}


		public void setUserid(Long userid) {
			this.userid = userid;
		}


		public String getUsername() {
			return username;
		}


		public void setUsername(String username) {
			this.username = username;
		}


		public String getPassword() {
			return password;
		}


		public void setPassword(String password) {
			this.password = password;
		}


		public String getCpassword() {
			return cpassword;
		}


		public void setCpassword(String cpassword) {
			this.cpassword = cpassword;
		}


		




		public String getEmail() {
			return email;
		}


		public void setEmail(String email) {
			this.email = email;
		}
		
		
		


		
	    
	   public String getMobilenumber() {
			return mobilenumber;
		}


		public void setMobilenumber(String mobilenumber) {
			this.mobilenumber = mobilenumber;
		}


		public String getLocation() {
			return location;
		}


		public void setLocation(String location) {
			this.location = location;
		}


	

	@Override
		public String toString() {
			return "User [userid=" + userid + ", username=" + username + ", password=" + password + ", cpassword="
					+ cpassword + ", email=" + email + ", mobilenumber=" + mobilenumber + ", location=" + location
					+ "]";
		}
	
	


	public User(Long userid, String username, String password, String cpassword, String email, String mobilenumber,
			String location) {
		super();
		this.userid = userid;
		this.username = username;
		this.password = password;
		this.cpassword = cpassword;
		this.email = email;
		this.mobilenumber = mobilenumber;
		this.location = location;
	}


	public User() {
		   
	   }

	
	
}
