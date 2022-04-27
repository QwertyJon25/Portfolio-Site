class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.string :name
      t.integer :date
      t.string :degree

      t.timestamps
    end
  end
end
