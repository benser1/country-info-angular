class PlaylistsController < ApplicationController

  def index
    respond_with Playlist.all
  end

  def show
    respond_with Playlist.find(params[:id])
  end

  # def new
  #   @playlist = Playlist.new
  # end

  def create
    respond_with Playlist.create(playlist_params)
    # @playlist = Playlist.new(playlist_params)
    # @playlist.user_id = current_user.id
    # @playlist.save 

    # redirect_to playlist_path(@playlist)
  end

  # def edit
  #   play_help
  # end

  # def update
  #   play_help
  # end

  def destroy
    respond_with Playlist.find(params[:id]).destroy
  end

  private 

  def playlist_params
    params.require(:playlist).permit(:name)
  end

  # def play_help
  #   @playist = Playlist.find(params[:id])
  # end




end ## class end 
