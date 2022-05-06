package com.example.datacenter.controller;
import java.util.Date;
import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Cheeseinfo;
import com.example.datacenter.model.domain.Culturepurchase;
import com.example.datacenter.model.domain.request.CheeseinfoRequest;
import com.example.datacenter.model.domain.request.CulturepurchaseRequest;
import com.example.datacenter.service.CheeseinfoService;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import com.google.gson.JsonObject;




/**
 * @author YanPAN
 * @create 2022-05-05 13:20
 */

@RestController
@RequestMapping("/cheeseinfo")
public class CheeseinfoController {

    @Resource
    private CheeseinfoService cheeseinfoService;

    @PostMapping("/add")
    public String addCheeseinfopurchase(@RequestBody CheeseinfoRequest cheeseinfoRequest) {
        Cheeseinfo cheeseinfo= new Cheeseinfo();
        cheeseinfo.setCheeseID(cheeseinfoRequest.getCheeseID());
        cheeseinfo.setCheeseName(cheeseinfoRequest.getCheeseName());
        cheeseinfo.setCheeseDescription(cheeseinfoRequest.getCheeseDescription());
        cheeseinfo.setRennetBatchCode(cheeseinfoRequest.getRennetBatchCode());
        cheeseinfo.setRennetWeight(cheeseinfoRequest.getRennetWeight());
        cheeseinfo.setCaClBatchCode(cheeseinfoRequest.getCaClBatchCode());
        cheeseinfo.setCaClWeight(cheeseinfoRequest.getCaClWeight());
        cheeseinfo.setCultureInfo(cheeseinfoRequest.getCultureInfo());

        cheeseinfo.setCreateTime(new Date());
        cheeseinfo.setUpdateTime(new Date());
        cheeseinfo.setIsDelete(0);

        boolean save = cheeseinfoService.save(cheeseinfo);
        if (!save) {
            return "null,";
        }
        return cheeseinfo.getCheeseID();
    }

    @PostMapping("/update")
    public String updateCheeseinfo(@RequestBody CheeseinfoRequest cheeseinfoRequest) {

        String orderID = cheeseinfoRequest.getCheeseID();
        if (orderID==null){
            return "null";
        }
        Cheeseinfo cheeseinfo = cheeseinfoService.getById(orderID);
        cheeseinfo.setCheeseID(cheeseinfoRequest.getCheeseID());
        cheeseinfo.setCheeseName(cheeseinfoRequest.getCheeseName());
        cheeseinfo.setCheeseDescription(cheeseinfoRequest.getCheeseDescription());
        cheeseinfo.setRennetBatchCode(cheeseinfoRequest.getRennetBatchCode());
        cheeseinfo.setRennetWeight(cheeseinfoRequest.getRennetWeight());
        cheeseinfo.setCaClBatchCode(cheeseinfoRequest.getCaClBatchCode());
        cheeseinfo.setCaClWeight(cheeseinfoRequest.getCaClWeight());
        cheeseinfo.setCultureInfo(cheeseinfoRequest.getCultureInfo());
        cheeseinfo.setCreateTime(cheeseinfoRequest.getCreateTime());
        cheeseinfo.setUpdateTime(cheeseinfoRequest.getUpdateTime());
        cheeseinfo.setIsDelete(0);

        cheeseinfoService.saveOrUpdate(cheeseinfo);
        return cheeseinfo.getCheeseID();
    }

    @GetMapping("/search")
    public List<Cheeseinfo> searchCheeseinfo(String id, HttpServletRequest request) {
        QueryWrapper<Cheeseinfo> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("CheeseinfoID", id);
        }
        return cheeseinfoService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteCheeseinfo(@RequestBody CheeseinfoRequest request) {
        Cheeseinfo cheeseinfo = new Cheeseinfo();
        cheeseinfo.setCheeseID(request.getCheeseID());
        cheeseinfoService.removeById(cheeseinfo);
    }


}
