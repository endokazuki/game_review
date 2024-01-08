class CreateDropGameGenres < ActiveRecord::Migration[7.0]
  def change
    drop_table :game_genres do |t|
    end
  end
end
