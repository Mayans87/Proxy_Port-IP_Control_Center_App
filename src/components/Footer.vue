<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Logo -->
        <img src="../assets/logo.png" alt="Company Logo" class="footer-logo" />
  
        <!-- Follow Us -->
        <div class="follow-us">
          <span>FOLLOW US</span>
          <!-- Add your social media icons or links here -->
          <!-- Example with Font Awesome icons -->
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-linkedin"></i>
        </div>
  
        <!-- Navigation Links -->
        <nav class="footer-nav">
          <ul>
            <li><a href="#">SITE MAP</a></li>
            <li><a href="#">HOME</a></li>
            <li><a href="#">COMPANY</a></li>
            <li><a href="#">INDUSTRIES</a></li>
            <li><a href="#">PRODUCTS</a></li>
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">DOWNLOADS</a></li>
          </ul>
        </nav>
  
        <!-- Product Categories -->
        <div class="product-categories">
          <h4>PRODUCTS</h4>
          <ul>
            <li><a href="#">SIRIUS</a></li>
            <li><a href="#">HUSKY</a></li>
            <li><a href="#">ITAS | HUSKY RTU 6049-E70M | HUSKY DCUE70</a></li>
            <!-- Add more product categories as needed -->
          </ul>
        </div>
  
        <!-- Contact Information -->
        <div class="contact-info">
          <h4>Contact Information</h4>
          <p>A-1526-27 Green Fields Colony,</p>
          <p>Faridabad, Haryana - 121 001</p>
          <p>India.</p>
          <p>Phone: +91 - 129 - 2510 501-3</p>
        </div>
      </div>
  
      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2024. Synergy Systems & Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: black;
    color: white;
    padding: 20px 0;
  }

  li a{
    text-decoration: none;
    color: white;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-logo {
    width: 100px; /* Adjust as needed */
  }
  
  .follow-us {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    margin-top: 30px;
  }
  
  i{
font-size: 45px;
padding: 3px;
margin: 5px;
cursor: pointer;
  }

  .follow-us span {
    margin-right: 10px;
    font-weight: bold;
  }
  
  .footer-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  .footer-nav li {
    margin-right: 15px;
  }
  
  .product-categories {
    margin-top: 20px;
  }
  
  .product-categories h4 {
    color: #fff;
  }
  
  .contact-info {
    margin-top: 20px;
  }
  
  .contact-info h4 {
    color: #fff;
  }
  
  .copyright {
    margin-top: 20px;
    text-align: center;
  }
  </style>
  