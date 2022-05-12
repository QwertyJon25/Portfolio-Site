Project.destroy_all
Skill.destroy_all
Education.destroy_all
About.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating projects..."
Project.create(name: "Canine Crushes", desc: "Created with React.js as a frontend framework, Active Record as an ORM, and Sinatra as a backend framework. Featuring React Router and CSS for styling. This application was my third semester project during my time at Flatiron School. Users can view a list of dogs rendered from associated data from a custom backend database, and all entries feature full CRUD capability.", git: "https://github.com/QwertyJon25/Canine-Crushes-frontend", vid: "In Progress")

Project.create(name: "", desc: "", git: "", vid: "")

Project.create(name: "", desc: "", git: "", vid: "")


puts "Creating skills..."
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")
Skill.create(name: "", is_web: "")


puts "Creating educations..."
Education.create(name: "", date: "", degree: "")
Education.create(name: "", date: "", degree: "")
Education.create(name: "", date: "", degree: "")


puts "Creating abouts..."
About.create(bio: "", image: "")


puts "✅ Done seeding!" 