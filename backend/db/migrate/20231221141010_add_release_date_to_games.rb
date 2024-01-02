class AddReleaseDateToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :release_date, :datetime
  end
end
