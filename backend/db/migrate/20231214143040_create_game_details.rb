class CreateGameDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :game_details do |t|
      t.references :game, null: false, foreign_key: true
      t.integer :review_score
      t.string :review_score_desc
      t.integer :total_positive_review
      t.integer :total_negative_review
      t.integer :total_review

      t.timestamps
    end
  end
end
