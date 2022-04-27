class CreateAbouts < ActiveRecord::Migration[6.1]
  def change
    create_table :abouts do |t|
      t.string :bio
      t.string :image

      t.timestamps
    end
  end
end
