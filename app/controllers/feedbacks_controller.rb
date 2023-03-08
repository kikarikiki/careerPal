class FeedbacksController < ApplicationController

  def new
    @video_call = VideoCall.find(params[:video_call_id])
    @feedback = Feedback.new
  end

  def create
    @feedback = Feedback.new(feedback_params)
    @video_call = VideoCall.find(params[:video_call_id])
    @feedback.video_call = @video_call
    @feedback.giver = current_user
    if @feedback.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def feedback_params

  end
end