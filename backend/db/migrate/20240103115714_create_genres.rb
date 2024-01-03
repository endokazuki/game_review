class CreateGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :genres do |t|
      t.integer :genre_id
      t.string :name, null: false, limit: 60
      t.timestamps
    end
  end
end
