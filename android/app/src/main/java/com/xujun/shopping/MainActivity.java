package com.xujun.shopping;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    private final int   OVERLAY_PERMISSION_REQ_CODE=2001;

    public  void onCreate(Bundle saveInstanceState){
        super.onCreate(saveInstanceState);
        if (Build.VERSION.SDK_INT>=Build.VERSION_CODES.M){
            if (!Settings.canDrawOverlays(this)){
                Intent intent=new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:"+getPackageName()));
                startActivityForResult(intent,OVERLAY_PERMISSION_REQ_CODE);
            }
        }
    }


    @Override
    public void onActivityResult(int reqCode,int resCode,Intent data){
        if (reqCode==OVERLAY_PERMISSION_REQ_CODE){
            if (Build.VERSION.SDK_INT>=Build.VERSION_CODES.M){
                if(!Settings.canDrawOverlays(this)){

                }
            }
        }
    }
}
