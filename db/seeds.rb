Project.destroy_all
Skill.destroy_all
Education.destroy_all
About.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating projects..."
Project.create(name: "Canine Crushes", desc: "Created with React.js as a frontend framework, Active Record as an ORM, and Sinatra as a backend framework. Featuring React Router and CSS for styling. This application was my third semester project during my time at Flatiron School. Users can view a list of dogs rendered from associated data from a custom backend database, and all entries feature full CRUD capability.", git: "https://github.com/QwertyJon25/Canine-Crushes-frontend", vid: "https://www.loom.com/share/26df7accc6a84b1e8fee716b3e378c2f")

Project.create(name: "ArtDex", desc: "Created with React.js as a frontend framework, Active Record as an ORM, and Ruby on Rails as a backend framework. Featuring React Router and CSS for styling. This application was my capstone project during my final semester at Flatiron School. Users can view lists of artists, galleries, directors and art pieces rendered from associated data from a custom backend database. Art pieces feature full CRUD capability.", git: "https://github.com/QwertyJon25/ArtDex", vid: "https://www.loom.com/share/481dd8660d814d40bf9a8df53639cbc3")

Project.create(name: "SpectrumSpecs", desc: "Created with React.js and styled with CSS.", git: "https://github.com/QwertyJon25/SpectrumSpecs", vid: "In Progress")


puts "Creating skills..."
Skill.create(name: "HTML", is_web: "true")

Skill.create(name: "CSS", is_web: "true")

Skill.create(name: "Javascript(ES6)", is_web: "true")

Skill.create(name: "React.js", is_web: "true")

Skill.create(name: "Ruby", is_web: "true")

Skill.create(name: "Sinatra", is_web: "true")

Skill.create(name: "Ruby on Rails", is_web: "true")

Skill.create(name: "SQLite3", is_web: "true")

Skill.create(name: "Postgresql", is_web: "true")

# Skill.create(name: "Adobe Photoshop", is_web: "false")

# Skill.create(name: "Traditional Media", is_web: "false")

# Skill.create(name: "", is_web: "")
# Skill.create(name: "", is_web: "")
# Skill.create(name: "", is_web: "")
# Skill.create(name: "", is_web: "")
# Skill.create(name: "", is_web: "")


puts "Creating educations..."
Education.create(name: "Flatiron School", date: "2021", degree: "Certificate of Completion")

Education.create(name: "SUNY Orange", date: "2011", degree: "Associate Degree - Art")

Education.create(name: "Middletown High School", date: "2009", degree: "Diploma")


puts "Creating abouts..."
About.create(bio: "I'm a Comic Illustrator, Junior Software Engineer and Full-Stack Web Developer. I attended the Flatiron School and completed the Software Engineering course in 2021. I've held a wide range of varied jobs during my time in the workforce, and am an enthusiastic linguistics nerd.", image: "https://imgur.com/s3X9BIJ")


puts "✅ Done seeding!" 