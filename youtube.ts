// defining a class
class YouTube{

     //constructor used for initialize a class filed
    constructor(public channelTitle : string, public videoTitle : string, public published : string, private views ?: any, private subscribers ?: any){
        this.channelTitle = channelTitle
        this.videoTitle = videoTitle
        if(views)
        {
            this.views = views
        }
        else{
            this.views = null
        }
        this.published = published
        if(subscribers)
        {
            this.subscribers = subscribers
        }
        else{
            this.subscribers = null
        }
       
    }// constructor end

    //getter
    getChannelTitle = () =>{
        return this.channelTitle
    }

    getVideoTitle = () =>{
        return this.videoTitle
    }

    getNumberOfViews = () =>{
        return this.views
    }

    getPublished = () =>{
        return this.published
    }

    getSubscribers = () =>{
        return this.subscribers
    }

      //Setter
      setViews = (views:any) =>{
        return this.views = views
        }
        setSubscribers = (subscribers:any) =>{
        return this.subscribers = subscribers
        }

    // method
    playList = () =>{
        console.log("save this video to ur favioute playList")
    }
    watchLater = () =>{
        console.log("click to watch this video later")
    }
}// class end

// defining a another extends class
class CurrentVideo extends YouTube{

    constructor(public channelName:string,
        public videoTitle:string,
        views:any,
        public published:string,
        subscribers:any,
        public likes:number,
        public disLikes:number,
        public description:string,
        protected comments:string){
        super(channelName,videoTitle,views,published,subscribers)
        this.likes = likes
        this.disLikes = disLikes
        this.description = description
        this.comments = comments
    }// end constructor

    //getter
    getNumberOfLikes = () =>{
        return this.likes
    }
    
    getNumberOfDislikes = () =>{
        return this.disLikes
    }
    
    getDescription = () =>{
        return this.description
    }

    getTopComment = () =>{
        return this.comments
    }
    
    //Setter
    setTopComment = (comments:string) =>{
        this.comments= comments
    }
       
// method
relatedVideos = () =>{
    console.log("These are the related Videos list")
}

autoPlay = () =>{
    console.log("Autoplay to loop all the video on/off")
}

share = () =>{
    console.log("share this video with ur friend")
}

quality = () =>{
    console.log("This is high quality video")
}

speed = () =>{
    console.log("this video will play in normal speed")
}

}// end class 

let Lyrical = new YouTube("Sony","Inkem Inkem Inkem Kaavaale Lyrical","03-08-2018")

console.log("simple get all data")
//get data
console.log("Channel Title:"+Lyrical.getChannelTitle())
console.log("Title:"+Lyrical.getVideoTitle())
console.log("Views:"+Lyrical.getNumberOfViews())
console.log("Published on:"+Lyrical.getPublished())
console.log("Subscribers:"+Lyrical.getSubscribers())

//functional call
Lyrical.playList()
Lyrical.watchLater()

console.log("update the views and subscribers")

//update views
Lyrical.setViews(290000)
console.log("updated views",Lyrical.getNumberOfViews())

//update subscribers
Lyrical.setSubscribers("4.2k")
console.log("updated subscribers",Lyrical.getSubscribers())

console.log("another class access")

let CurrentVideoList = new CurrentVideo(Lyrical.getChannelTitle(),Lyrical.getVideoTitle(),Lyrical.getNumberOfViews(),Lyrical.getPublished(),Lyrical.getSubscribers(),6550000,13212,"Watch & Enjoy Inkem Inkem Inkem Kaavaale Lyrical Song From Telugu Movie","super song")

//get data
console.log("Channel Title:"+CurrentVideoList.getChannelTitle())
console.log("Title:"+CurrentVideoList.getVideoTitle())
console.log("Views:"+CurrentVideoList.getNumberOfViews())
console.log("Published on:"+CurrentVideoList.getPublished())
console.log("Subscribers:"+CurrentVideoList.getSubscribers())
console.log("Likes:"+CurrentVideoList.getNumberOfLikes())
console.log("Dislikes:"+CurrentVideoList.getNumberOfDislikes())
console.log("Top-Comment:"+CurrentVideoList.getTopComment())
console.log("Description:"+CurrentVideoList.getDescription())


//functional call
CurrentVideoList.playList()
CurrentVideoList.watchLater()
CurrentVideoList.relatedVideos()
CurrentVideoList.autoPlay()
CurrentVideoList.share()
CurrentVideoList.speed()
CurrentVideoList.quality()

//update comment

CurrentVideoList.setTopComment("awesome lyrical")
console.log("updated Top-Comment:"+CurrentVideoList.getTopComment())

