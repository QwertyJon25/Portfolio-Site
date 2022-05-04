Project.destroy_all
Skill.destroy_all
Education.destroy_all
About.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating projects..."
Project.create(name: "", desc: "", git: "", vid: "")
Project.create(name: "", desc: "", git: "", vid: "")
Project.create(name: "", desc: "", git: "", vid: "")


puts "Creating skills..."
Skill.create(name: "", is_web: "")


puts "Creating educations..."
Education.create(name: "", date: "", degree: "")


puts "Creating abouts..."
About.create(bio: "", image: "")


puts "✅ Done seeding!" 