package com.ssafy.BravoSilverLife.service;

import com.ssafy.BravoSilverLife.dto.Condition;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class EstateServiceImpl implements EstateService {
    @Override
    public void getCluster(Condition condition) throws Exception {

        System.out.println("123");
        String apiurl = "https://new.land.naver.com/api/articles/clusters?cortarNo=1168010300&zoom=16&markerId&markerType&selectedComplexNo&selectedComplexBuildingNo&fakeComplexMarker&realEstateType=SG&tradeType=&tag=%3A%3A%3A%3A%3A%3A%3A%3A";
        apiurl += "&rentPriceMin=" + condition.getRentPriceMin();
        apiurl += "&rentPriceMax=" + condition.getRentPriceMax();
        apiurl += "&priceMin=" + condition.getPriceMin();
        apiurl += "&priceMax=" + condition.getPriceMax();
        apiurl += "&areaMin=" + condition.getAreaMin();
        apiurl += "&areaMax=" + condition.getAreaMax();
        apiurl += "&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=";
        apiurl += "&leftLon=" + condition.getLeftLon();
        apiurl += "&rightLon=" + condition.getRightLon();
        apiurl += "&topLat=" + condition.getTopLat();
        apiurl += "&bottomLat=" + condition.getBottomLat();


        URL url = new URL(apiurl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();

        con.setConnectTimeout(5000); //서버에 연결되는 Timeout 시간 설정
        con.setReadTimeout(5000); // InputStream 읽어 오는 Timeout 시간 설정

        con.addRequestProperty("Accept", "*/*");
        con.addRequestProperty("Accept-Encoding", "gzip, deflate, br");
        con.addRequestProperty("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7");
        con.addRequestProperty("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2NjY1ODU2NDYsImV4cCI6MTY2NjU5NjQ0Nn0.QR78-v3ZCzD4rnPTqY4UJBOChhlwplfxi7o71KXA9GY");
        con.addRequestProperty("Connection", "keep-alive");
        con.addRequestProperty("Cookie", "NNB=AA74EGYPWXFWE; m_loc=5728a2c06c053be3e4fabc814c4203f5af7e600fdf28feaab54175e103036df2; NV_WETR_LOCATION_RGN_M=\"MDIxMzE1NTA=\"; NV_WETR_LAST_ACCESS_RGN_M=\"MDIxMzE1NTA=\"; _ga=GA1.2.449519277.1661930757; _ga_7VKFYR6RV1=GS1.1.1663228241.4.0.1663228241.60.0.0; page_uid=hyYyasprvTVssDxnUgZssssssNK-359919; nhn.realestate.article.rlet_type_cd=A01; nhn.realestate.article.trade_type_cd=\"\"; nhn.realestate.article.ipaddress_city=2900000000; landHomeFlashUseYn=Y; realestate.beta.lastclick.cortar=2920000000; nid_inf=1427257442; NID_JKL=ycx3Zt23nCR3itEevK57FMMGtZbQqspe7ByT2/hYuIE=; BMR=s=1666585258383&r=https%3A%2F%2Fm.blog.naver.com%2Ffbfbf1%2F222632994331&r2=https%3A%2F%2Fwww.google.com%2F; REALESTATE=Mon%20Oct%2024%202022%2013%3A27%3A26%20GMT%2B0900%20(KST); wcs_bt=4f99b5681ce60:1666585646");
        con.addRequestProperty("Host", "new.land.naver.com");
        con.addRequestProperty("Referer", "https://new.land.naver.com/offices?ms=37.482968,127.0634,16&a=SG&e=RETAIL");

        con.setRequestMethod("GET");
        con.setDoOutput(true);

        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
        } catch (Exception e) {
            // ???
        }

        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();

        JSONParser parser = new JSONParser();
        System.out.println(response.toString());
//        Object obj = parser.parse(response.toString());

//        JSONObject jsonMain = (JSONObject) obj;
//        JSONArray jsonArr = (JSONArray) jsonMain.get("items");

    }

    @Override
    public void getArticles(long markerId) throws Exception {
        System.out.println("123");
        String apiurl = "https://new.land.naver.com/api/articles?";
        apiurl += "markerId=" + markerId;
        apiurl += "&markerType=LGEOHASH_MIX_ARTICLE&prevScrollTop&order=rank&realEstateType=SG&tradeType=&tag=%3A%3A%3A%3A%3A%3A%3A%3A" +
                "&rentPriceMin=0" +
                "&rentPriceMax=900000000" +
                "&priceMin=0" +
                "&priceMax=900000000" +
                "&areaMin=0" +
                "&areaMax=900000000" +
                "&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page=1&articleState";

        URL url = new URL(apiurl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();

        con.setConnectTimeout(5000); //서버에 연결되는 Timeout 시간 설정
        con.setReadTimeout(5000); // InputStream 읽어 오는 Timeout 시간 설정

        con.addRequestProperty("Accept", "*/*");
        con.addRequestProperty("Accept-Encoding", "gzip, deflate, br");
        con.addRequestProperty("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7");
        con.addRequestProperty("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2NjY1ODcxNTEsImV4cCI6MTY2NjU5Nzk1MX0.ECXQtzXedDfTHPx3ADfhQFIElBhzTrmdpHLOWCsTf-A");
        con.addRequestProperty("Connection", "keep-alive");
        con.addRequestProperty("Cookie", "NNB=AA74EGYPWXFWE; m_loc=5728a2c06c053be3e4fabc814c4203f5af7e600fdf28feaab54175e103036df2; NV_WETR_LOCATION_RGN_M=\"MDIxMzE1NTA=\"; NV_WETR_LAST_ACCESS_RGN_M=\"MDIxMzE1NTA=\"; _ga=GA1.2.449519277.1661930757; _ga_7VKFYR6RV1=GS1.1.1663228241.4.0.1663228241.60.0.0; page_uid=hyYyasprvTVssDxnUgZssssssNK-359919; nhn.realestate.article.rlet_type_cd=A01; nhn.realestate.article.trade_type_cd=\"\"; nhn.realestate.article.ipaddress_city=2900000000; landHomeFlashUseYn=Y; realestate.beta.lastclick.cortar=2920000000; nid_inf=1427257442; NID_JKL=ycx3Zt23nCR3itEevK57FMMGtZbQqspe7ByT2/hYuIE=; BMR=s=1666585258383&r=https%3A%2F%2Fm.blog.naver.com%2Ffbfbf1%2F222632994331&r2=https%3A%2F%2Fwww.google.com%2F; REALESTATE=Mon%20Oct%2024%202022%2013%3A52%3A31%20GMT%2B0900%20(KST); wcs_bt=4f99b5681ce60:1666587151");
        con.addRequestProperty("Host", "new.land.naver.com");
        con.addRequestProperty("Referer", "https://new.land.naver.com/offices?ms=37.482968,127.0634,16&a=SG&e=RETAIL");
        con.addRequestProperty("sec-ch-ua", "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"");
        con.addRequestProperty("sec-ch-ua-mobile", "?0");
        con.addRequestProperty("Sec-Fetch-Mode", "cors");
        con.addRequestProperty("sec-ch-ua-platform", "Windows");

        con.addRequestProperty("Sec-Fetch-Dest", "empty");


        con.addRequestProperty("Sec-Fetch-Site", "same-origin");
        con.addRequestProperty("User-Agent", " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");

        con.setRequestMethod("GET");
        con.setDoOutput(true);

        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
        } catch (Exception e) {
            // ???
        }

        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();

        JSONParser parser = new JSONParser();
        System.out.println(response.toString());
    }

    @Override
    public void getArticleDetail(long articleNo) throws Exception {
        System.out.println("123");
        String apiurl = "https://new.land.naver.com/api/articles/";
        apiurl += articleNo;
        apiurl += "?complexNo=";

        URL url = new URL(apiurl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();

        con.setConnectTimeout(5000); //서버에 연결되는 Timeout 시간 설정
        con.setReadTimeout(5000); // InputStream 읽어 오는 Timeout 시간 설정

        con.addRequestProperty("Accept", "*/*");
        con.addRequestProperty("Accept-Encoding", "gzip, deflate, br");
        con.addRequestProperty("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7");
        con.addRequestProperty("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2NjY1OTM0NDksImV4cCI6MTY2NjYwNDI0OX0.rksKZp_aYP7bu7pBTZti_x4LjcfDcGNZNtc1hMTriJ8");
        con.addRequestProperty("Connection", "keep-alive");
        con.addRequestProperty("Cookie", "NNB=AA74EGYPWXFWE; m_loc=5728a2c06c053be3e4fabc814c4203f5af7e600fdf28feaab54175e103036df2; NV_WETR_LOCATION_RGN_M=\"MDIxMzE1NTA=\"; NV_WETR_LAST_ACCESS_RGN_M=\"MDIxMzE1NTA=\"; _ga=GA1.2.449519277.1661930757; _ga_7VKFYR6RV1=GS1.1.1663228241.4.0.1663228241.60.0.0; page_uid=hyYyasprvTVssDxnUgZssssssNK-359919; nhn.realestate.article.rlet_type_cd=A01; nhn.realestate.article.trade_type_cd=\"\"; nhn.realestate.article.ipaddress_city=2900000000; landHomeFlashUseYn=Y; realestate.beta.lastclick.cortar=2920000000; nid_inf=1427257442; NID_JKL=ycx3Zt23nCR3itEevK57FMMGtZbQqspe7ByT2/hYuIE=; BMR=s=1666585258383&r=https%3A%2F%2Fm.blog.naver.com%2Ffbfbf1%2F222632994331&r2=https%3A%2F%2Fwww.google.com%2F; _gid=GA1.2.1919873049.1666593397; REALESTATE=Mon%20Oct%2024%202022%2015%3A37%3A29%20GMT%2B0900%20(KST); wcs_bt=4f99b5681ce60:1666593449");
        con.addRequestProperty("Host", "new.land.naver.com");
        con.addRequestProperty("Referer", "https://new.land.naver.com/offices?ms=37.4823891,127.0940201,16&a=SG&e=RETAIL");
        con.addRequestProperty("sec-ch-ua", "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"");
        con.addRequestProperty("sec-ch-ua-mobile", "?0");
        con.addRequestProperty("Sec-Fetch-Mode", "cors");
        con.addRequestProperty("sec-ch-ua-platform", "Windows");
        con.addRequestProperty("Sec-Fetch-Dest", "empty");
        con.addRequestProperty("Sec-Fetch-Site", "same-origin");
        con.addRequestProperty("User-Agent", " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36");

        con.setRequestMethod("GET");
        con.setDoOutput(true);

        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
        } catch (Exception e) {
            // ???
        }

        String inputLine;
        StringBuffer response = new StringBuffer();
        while ((inputLine = br.readLine()) != null) {
            response.append(inputLine);
        }
        br.close();

        JSONParser parser = new JSONParser();
        System.out.println(response.toString());
    }
}
