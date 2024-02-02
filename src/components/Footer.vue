<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo -->
      <img src="../assets/logo.png" alt="Company Logo" class="footer-logo" />

      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2024. Synergy Systems & Solutions. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px 0;
}

.footer-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.footer-logo {
  width: 100px; /* Adjust as needed */
}

.copyright {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

</style>
