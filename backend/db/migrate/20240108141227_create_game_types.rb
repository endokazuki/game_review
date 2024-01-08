class CreateGameTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :game_types do |t|
      t.references :game, foreign_key: true
      t.references :type, foreign_key: true

      t.timestamps
    end
  end
end
