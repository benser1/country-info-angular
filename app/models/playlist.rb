class Playlist < ActiveRecord::Base

  belongs_to :user
  # has_many :comments   #### Add this in 

  # def as_json(options = {})
  #   super(options.merge(include: :comments))  ## Add with comments
  # end

end ## class end
