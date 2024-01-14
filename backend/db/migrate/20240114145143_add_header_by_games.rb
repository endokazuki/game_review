class AddHeaderByGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :header, :string, limit: 150
  end
end
