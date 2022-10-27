package com.ssafy.BravoSilverLife.service;

import com.ssafy.BravoSilverLife.dto.Article;
import com.ssafy.BravoSilverLife.dto.ArticleList;
import com.ssafy.BravoSilverLife.dto.Cluster;
import com.ssafy.BravoSilverLife.dto.Condition;
import com.ssafy.BravoSilverLife.entity.DongCode;
import com.ssafy.BravoSilverLife.repository.DongCodeRepository;
import io.micrometer.core.instrument.util.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;


@Service
public class InfraServiceImpl implements InfraService {

    @Autowired
    DongCodeRepository dongCodeRepository;

    @Override
    public JSONObject getPopular(String name) throws Exception {

        List<DongCode> temp = dongCodeRepository.findByName(name);
        if (temp.size()==0) return null;

        int admiCd = temp.get(0).getCode();
        String apiurl = "https://sg.sbiz.or.kr/godo/getPopularInfo.json?admiCd=" + admiCd;

        TrustManager[] trustAllCerts = new TrustManager[]{
                new X509TrustManager() {
                    public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                        return null;
                    }

                    public void checkClientTrusted(
                            java.security.cert.X509Certificate[] certs, String authType) {
                    }

                    public void checkServerTrusted(
                            java.security.cert.X509Certificate[] certs, String authType) {
                    }
                }
        };

        // Install the all-trusting trust manager
        try {
            SSLContext sc = SSLContext.getInstance("SSL");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

        } catch (Exception e) {
        }

        // Now you can access an https URL without having the certificate in the truststore
        try {
            URL url = new URL(apiurl);
            String json = IOUtils.toString(url.openStream(), Charset.forName("UTF-8"));

            JSONParser parser = new JSONParser();
            Object obj = parser.parse(json);
            JSONObject jsonMain = (JSONObject) obj;
            JSONObject population = (JSONObject) jsonMain.get("population");
            return population;

        } catch (Exception e) {
            // ???

        }
        return null;
    }


}
