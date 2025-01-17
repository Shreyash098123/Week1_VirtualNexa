// Smooth Scrolling
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  
  //  Submission and Validation

  const jobForm = document.getElementById('job-form');
  const jobListings = document.querySelector('.job-listings');
  
  jobForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values

    const jobTitle = document.getElementById('job-title').value;
    const companyName = document.getElementById('company-name').value;
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('job-type').value;
  
    // Validate fields

    if (!jobTitle || !companyName || !location) {
      alert('Please fill in all fields');
      return;
    }
  
    // Create a new job 

    const jobCard = document.createElement('div');
    jobCard.classList.add('job');
    jobCard.innerHTML = `
      <h2>${jobTitle}</h2>
      <p>Company: ${companyName}</p>
      <p>Location: ${location}</p>
      <p>Type: ${jobType}</p>
      <button class="apply-btn">Apply</button>
    `;
  
    // Append job card to job listings

    jobListings.appendChild(jobCard);
  
    // Clear form
    jobForm.reset();
    alert('Job posted successfully!');
  });
  
  
  // Handle Apply Button Click
  document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('apply-btn')) {
      alert('Application submitted!');
    }
  });
  