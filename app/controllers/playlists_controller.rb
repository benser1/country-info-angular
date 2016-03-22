class PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
  end

  def show
    play_help
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    @playlist.save 

    redirect_to playlist_path(@playlist)
  end

  def edit
    play_help
  end

  def update
    play_help
  end

  def delete

  end

  private 

  def playlist_params
    params.require(:playlist).permit(:name)
  end

  def play_help
    @playist = Playlist.find(params[:id])
  end




end ## class end 
