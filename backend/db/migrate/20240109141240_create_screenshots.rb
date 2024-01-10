class CreateScreenshots < ActiveRecord::Migration[7.0]
  def change
    create_table :screenshots do |t|
      t.references :game, foreign_key: true
      t.string :url, null: false, limit: 150

      t.timestamps
    end
  end
end
