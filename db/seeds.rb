Project.destroy_all
Skill.destroy_all
Education.destroy_all
About.destroy_all

puts "🌱 Seeding data..."

# Seed your database here
puts "Creating projects..."
Artist.create(name: "Jon Courtier", bio: "Jon Anthony Courtier is an afro-Latinx illustrator and comic artist who lives in Brooklyn")


puts "Creating skills..."
Director.create(name: "John Akomfrah", bio: "John Akomfrah CBE is a British artist, writer, film director, screenwriter, theorist and curator of Ghanaian descent, whose 'commitment to a radicalism both of politics and of cinematic form finds expression in all his films'.", contact: "john@gmail.com", image: "https://i.guim.co.uk/img/media/2bba21a303818ddd94c170bdbda3dc6617b68c7a/0_309_8075_4845/master/8075.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=64a24c52e8f8854e42f04072956f8b7e")


puts "Creating educations..."
Gallery.create(name: "Gagosian Gallery", desc: "Gagosian is a contemporary art gallery owned and directed by Larry Gagosian. The gallery exhibits some of the most influential artists of the 20th and 21st centuries. There are 16 gallery spaces: five in New York; three in London; two in Paris; one each in Basel, Beverly Hills, Rome, Athens, Geneva and Hong Kong", contact: "gagosian@gmail.com", location: "New York, New York",  director_id: Director.all.sample.id)


puts "Creating abouts..."
Material.create(name: "Paintbrush", desc: "Used to apply paint to canvas.", category: "Painting", artist_id: Artist.all.sample.id, piece_id: Piece.all.sample.id)


puts "✅ Done seeding!" 