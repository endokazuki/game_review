class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.integer :game_id
      t.string :primary_key
      t.string :title, null:false

      t.timestamps
    end
  end
end
